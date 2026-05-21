# Deploying to LetsHost cPanel

The app builds to a fully static bundle — no Node server needed. cPanel just serves the files.

## 1. Build locally

```bash
npm install
npm run build
```

The static site is generated at: **`dist/client/`**

## 2. Upload to cPanel

1. Log in to cPanel → **File Manager**.
2. Open **`public_html`** (or a subdomain folder).
3. Upload **everything inside `dist/client/`** (NOT the folder itself — its contents). This includes:
   - `index.html`
   - `assets/` (JS, CSS, images, video, audio — all hashed)
   - `.htaccess` (enables SPA routing — make sure hidden files are visible: View → Show Hidden Files)
4. Done. Visit your domain.

> Tip: zip `dist/client/*`, upload the zip via File Manager, then "Extract" in place. Faster than uploading hundreds of files.

## 3. EmailJS (application form)

EmailJS runs entirely in the browser — no backend needed. It will work on cPanel as long as:

- The three `VITE_EMAILJS_*` values in `.env` are correct at **build time** (Vite inlines them into the bundle).
- In your EmailJS dashboard → **Account → Security**, add your cPanel domain (e.g. `https://yourdomain.com`) to the **Allowed Origins** list. Otherwise EmailJS will reject requests from your live site.

If you change the EmailJS keys, rebuild and re-upload.

## 4. HTTPS

Enable **AutoSSL** in cPanel (Security → SSL/TLS Status) so `https://` works. Then uncomment the HTTPS redirect block inside `.htaccess`.

## 5. Updating the site

Re-run `npm run build`, then re-upload the contents of `dist/client/` (overwrite). Keep `.htaccess` in place.

## Troubleshooting

- **Blank page / 404 on refresh** → `.htaccess` missing or `mod_rewrite` disabled. Confirm the file is uploaded and ask LetsHost to enable rewrite (it's on by default).
- **Video/audio not playing** → Check the file uploaded fully (size matches `dist/client/assets/`). Some shared hosts cap upload size — use the zip-extract method.
- **EmailJS error 403** → Add the domain in EmailJS Allowed Origins.