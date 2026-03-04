/**
 * ================================================================
 * BOOK MY WHEELER — Google Apps Script Backend
 * ================================================================
 * This script handles form submissions from bookmywheeler.com:
 *   1. Saves lead data to Google Sheets (acts as your "Excel")
 *   2. Sends email notification to admin
 *   3. Sends confirmation email to the customer (if email provided)
 *
 * SETUP INSTRUCTIONS:
 * ----------------------------------------------------------------
 * Step 1: Create a new Google Sheet at sheets.google.com
 *         Name it: "Book My Wheeler — Leads"
 *
 * Step 2: Open Extensions > Apps Script
 *
 * Step 3: Paste this entire script into the editor, replacing
 *         any existing code.
 *
 * Step 4: Update the config below with your details:
 *         - ADMIN_EMAIL: your email address
 *         - SHEET_NAME: the name of your sheet tab (default: "Leads")
 *
 * Step 5: Click "Save" (Ctrl+S)
 *
 * Step 6: Click "Deploy" > "New deployment"
 *         - Type: Web app
 *         - Execute as: Me
 *         - Who has access: Anyone
 *         Click "Deploy" and copy the Web App URL
 *
 * Step 7: Paste the Web App URL into index.html where it says:
 *         const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
 *
 * Step 8: Re-save and upload index.html to your hosting.
 *
 * Done! Every form submission will now:
 *   ✓ Add a new row to your Google Sheet
 *   ✓ Send you an email notification
 *   ✓ Send the customer a confirmation (if they provided email)
 * ================================================================
 */

// ----------------------------------------------------------------
// CONFIGURATION — Update these values
// ----------------------------------------------------------------
const CONFIG = {
  ADMIN_EMAIL: 'bookings@bookmywheeler.com', // ← Replace with your email
  SHEET_NAME: 'Leads',                        // ← Sheet tab name
  BRAND_NAME: 'Book My Wheeler',
  BRAND_PHONE: '+91 XXXXXXXXXX',             // ← Replace with your phone
  BRAND_WEBSITE: 'www.bookmywheeler.com',
};

// ----------------------------------------------------------------
// Main handler — receives POST requests from the website form
// ----------------------------------------------------------------
function doPost(e) {
  try {
    // Parse incoming data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }

    // Save to Google Sheet
    saveToSheet(data);

    // Send admin notification email
    sendAdminEmail(data);

    // Send customer confirmation (only if email provided)
    if (data.email && data.email.trim() !== '') {
      sendCustomerEmail(data);
    }

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Booking request received!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error and return error response
    console.error('Error processing submission:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ----------------------------------------------------------------
// Handle GET requests (for testing the deployment)
// ----------------------------------------------------------------
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Book My Wheeler API is running!' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ----------------------------------------------------------------
// Save lead data to Google Sheet
// ----------------------------------------------------------------
function saveToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  // Create the sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    // Add header row
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Phone',
      'Email',
      'Vehicle Type',
      'Pickup Location',
      'Pickup Date',
      'Return Date',
      'Duration (Days)',
      'Estimated Value (₹)',
      'Source',
      'Status'
    ]);

    // Style header row
    const headerRange = sheet.getRange(1, 1, 1, 12);
    headerRange.setBackground('#FF6B35');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);

    // Set column widths
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 150); // Name
    sheet.setColumnWidth(3, 130); // Phone
    sheet.setColumnWidth(4, 200); // Email
    sheet.setColumnWidth(5, 150); // Vehicle Type
    sheet.setColumnWidth(6, 160); // Pickup Location
    sheet.setColumnWidth(7, 120); // Pickup Date
    sheet.setColumnWidth(8, 120); // Return Date
    sheet.setColumnWidth(9, 120); // Duration
    sheet.setColumnWidth(10, 150); // Est. Value
    sheet.setColumnWidth(11, 120); // Source
    sheet.setColumnWidth(12, 100); // Status
  }

  // Calculate duration
  let duration = '';
  let estimatedValue = '';
  if (data.pickupDate && data.returnDate) {
    const pickup = new Date(data.pickupDate);
    const returnD = new Date(data.returnDate);
    const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
    duration = days + ' day(s)';

    // Rough pricing estimate
    const prices = {
      'Scooter': 375,
      'Bike': 1000,
      'Car': 1500,
      'SUV': 2500
    };
    const vehicleCategory = data.vehicleType ? data.vehicleType.split('(')[0].trim() : '';
    const dailyRate = prices[vehicleCategory] || 0;
    estimatedValue = dailyRate > 0 ? '₹' + (dailyRate * days).toLocaleString('en-IN') : 'TBD';
  }

  // Append the new lead row
  sheet.appendRow([
    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.vehicleType || '',
    data.pickupLocation || '',
    data.pickupDate || '',
    data.returnDate || '',
    duration,
    estimatedValue,
    data.source || 'bookmywheeler.com',
    'New Lead' // Default status
  ]);
}

// ----------------------------------------------------------------
// Send admin notification email
// ----------------------------------------------------------------
function sendAdminEmail(data) {
  const subject = `🚗 New Booking Request — ${data.name || 'Unknown'} (${data.vehicleType || 'Vehicle TBD'})`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #FF6B35, #E85A25); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🏍️ Book My Wheeler</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">New Booking Request Received!</p>
      </div>

      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; width: 40%; border-bottom: 1px solid #eee;">👤 Name</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;"><strong>${data.name || 'Not provided'}</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">📱 Phone</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;"><strong><a href="tel:${data.phone}" style="color: #FF6B35;">${data.phone || 'Not provided'}</a></strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">📧 Email</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;">${data.email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">🏍️ Vehicle Type</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;"><span style="background: #FF6B35; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${data.vehicleType || 'Not specified'}</span></td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">📍 Pickup Location</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;">${data.pickupLocation || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">📅 Pickup Date</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;">${data.pickupDate || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">🔁 Return Date</td>
            <td style="padding: 12px; color: #0A2540; border-bottom: 1px solid #eee;">${data.returnDate || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #555;">🌐 Source</td>
            <td style="padding: 12px; color: #0A2540;">${data.source || 'bookmywheeler.com'}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #FF6B35;">
          <strong>⚡ Action Required:</strong> Call ${data.name || 'this customer'} at
          <a href="tel:${data.phone}" style="color: #FF6B35; font-weight: bold;">${data.phone}</a>
          within 30 minutes to confirm their booking!
        </div>

        <div style="margin-top: 20px; text-align: center; padding: 16px; background: white; border-radius: 8px; border: 1px solid #eee;">
          <a href="https://wa.me/${(data.phone || '').replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(data.name || 'there')}!%20This%20is%20Book%20My%20Wheeler.%20We%20received%20your%20booking%20request%20and%20are%20confirming%20your%20${encodeURIComponent(data.vehicleType || 'vehicle')}%20from%20${encodeURIComponent(data.pickupLocation || 'Goa')}%20on%20${encodeURIComponent(data.pickupDate || 'your selected date')}."
            style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-right: 10px;">
            💬 WhatsApp Customer
          </a>
        </div>
      </div>

      <p style="text-align: center; color: #888; font-size: 12px; margin-top: 16px;">
        ${CONFIG.BRAND_NAME} • ${CONFIG.BRAND_WEBSITE} • Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
  });
}

// ----------------------------------------------------------------
// Send customer confirmation email
// ----------------------------------------------------------------
function sendCustomerEmail(data) {
  const subject = `Your Booking Request is Confirmed — ${CONFIG.BRAND_NAME}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0A2540, #1B6CA8); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🏍️ Book My Wheeler</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Explore Goa on Your Terms</p>
      </div>

      <div style="padding: 30px; background: white;">
        <h2 style="color: #0A2540;">Hi ${data.name || 'there'}! 👋</h2>
        <p style="color: #555; line-height: 1.6;">
          Thank you for your booking request! We've received your inquiry and our team will
          <strong>call you back within 30 minutes</strong> to confirm your booking.
        </p>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B35;">
          <h3 style="margin: 0 0 16px; color: #0A2540;">Your Booking Summary</h3>
          <p style="margin: 8px 0; color: #555;"><strong>Vehicle:</strong> ${data.vehicleType || 'To be confirmed'}</p>
          <p style="margin: 8px 0; color: #555;"><strong>Pickup From:</strong> ${data.pickupLocation || 'To be confirmed'}</p>
          <p style="margin: 8px 0; color: #555;"><strong>Pickup Date:</strong> ${data.pickupDate || 'To be confirmed'}</p>
          <p style="margin: 8px 0; color: #555;"><strong>Return Date:</strong> ${data.returnDate || 'To be confirmed'}</p>
        </div>

        <p style="color: #555; line-height: 1.6;">
          If you have any urgent queries, feel free to WhatsApp or call us directly:
        </p>
        <p style="text-align: center; margin: 20px 0;">
          <a href="tel:${CONFIG.BRAND_PHONE}" style="display: inline-block; background: #FF6B35; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            📞 ${CONFIG.BRAND_PHONE}
          </a>
        </p>

        <p style="color: #888; font-size: 14px; line-height: 1.6; margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee;">
          Happy riding! 🌴<br>
          <strong>Team ${CONFIG.BRAND_NAME}</strong><br>
          ${CONFIG.BRAND_WEBSITE}
        </p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: CONFIG.ADMIN_EMAIL,
  });
}
