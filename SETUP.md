# Book My Wheeler — Setup Guide

## Files Included
- `index.html` — The complete website (open in any browser to preview)
- `google-apps-script.js` — Backend script that saves leads to Google Sheets & sends email
- `SETUP.md` — This file

---

## Step 1 — Replace Placeholders in index.html

Open `index.html` and search for these placeholders (Ctrl+F):

| Placeholder | Replace With |
|---|---|
| `+91 XXXXXXXXXX` | Your actual WhatsApp/phone number (e.g. +91 98765 43210) |
| `91XXXXXXXXXX` | Your number without + or spaces (e.g. 919876543210) — used in WhatsApp links |
| `bookings@bookmywheeler.com` | Your actual booking email address |
| `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` | The URL from Step 2 below |

---

## Step 2 — Connect Google Sheets (Lead Form → Excel)

This makes every form submission automatically:
- ✅ Add a new row to a Google Sheet (your "Excel file")
- ✅ Send you an email notification with customer details
- ✅ Send the customer a confirmation email (if they provided their email)

### 2a. Create the Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it: **Book My Wheeler — Leads**
3. Leave it open

### 2b. Open Apps Script
1. In the Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script.js` and paste it in

### 2c. Update your email in the script
Find this line near the top:
```javascript
ADMIN_EMAIL: 'bookings@bookmywheeler.com',
```
Replace with your actual email address.

### 2d. Deploy as a Web App
1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" → choose **Web app**
3. Set:
   - **Description**: Book My Wheeler Lead Form
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** and grant permissions when prompted
6. Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/ABC.../exec`)

### 2e. Paste URL into the website
Open `index.html`, find this line:
```javascript
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied.

---

## Step 3 — Add Vehicle Photos (Optional but Recommended)

The current version uses emoji placeholders for vehicles. To add real photos:

1. Place your vehicle images in a folder, e.g. `/images/`
2. In `index.html`, find the vehicle card you want to update, e.g.:
   ```html
   <div class="vehicle-img scooter-bg">🛵</div>
   ```
3. Replace with:
   ```html
   <div class="vehicle-img" style="background:none; padding:0;">
     <img src="images/activa.jpg" alt="Honda Activa 6G" style="width:100%;height:100%;object-fit:cover;" />
   </div>
   ```

---

## Step 4 — Deploy the Website

### Option A: Hostinger / cPanel Hosting (Recommended)
1. Log in to your hosting control panel
2. Go to **File Manager → public_html**
3. Upload `index.html` (and any `/images/` folder if you added photos)
4. Your site is live at **www.bookmywheeler.com**

### Option B: Netlify (Free, Fast)
1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag and drop the `bookmywheeler/` folder onto the Netlify dashboard
3. Get an instant URL, then add your custom domain `www.bookmywheeler.com`

### Option C: GitHub Pages (Free)
1. Create a GitHub account and new repository
2. Upload `index.html` to the repo
3. Go to **Settings → Pages** → deploy from main branch
4. Add your custom domain in the settings

---

## Step 5 — Point Your Domain

After deploying, update your DNS settings at your domain registrar:
- Add an **A record** pointing to your host's IP address
- Or add a **CNAME record** pointing to your Netlify/GitHub Pages URL

(Your hosting provider will give you the exact values to use.)

---

## Things to Update Later

- [ ] Replace all `+91 XXXXXXXXXX` with real phone number
- [ ] Replace `bookings@bookmywheeler.com` with real email
- [ ] Set up Google Apps Script and paste the URL
- [ ] Add your business address in the footer (currently: Panaji, Goa — 403 001)
- [ ] Add real vehicle photos
- [ ] Add Google Analytics tracking code (optional)
- [ ] Update social media links (Instagram, Facebook) in the footer

---

## Quick Preview (Before Deploying)

Just double-click `index.html` to open it in your browser — no server needed.
The form will show a success message even without the Google Script URL configured.
Once you add the Script URL, leads will flow to Google Sheets + email automatically.

---

## Need Help?

Contact your web developer or refer to:
- Google Apps Script docs: [developers.google.com/apps-script](https://developers.google.com/apps-script)
- Netlify docs: [docs.netlify.com](https://docs.netlify.com)
