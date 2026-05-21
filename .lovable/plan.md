# Convert to a Static SPA Build for cPanel

## The problem

The project is currently set up with TanStack Start, which builds a
Cloudflare Worker bundle — not plain static files. That's why `npm run build`
doesn't produce an `index.html` you can drop into cPanel's `public_html`.

For LetsHost (or any shared cPanel host) we need a static SPA build:
a single `index.html` + hashed JS/CSS/asset files. The app is already a
single-page site with no server-side logic (EmailJS runs in the browser),
so this is a clean fit.

## What I'll change

1. Switch the build from TanStack Start (Cloudflare Worker) to plain
   Vite + React SPA.
2. Keep TanStack Router for client-side routing (no behavior change in the UI).
3. Reuse all existing components as-is — `Hero`, `ApplyModal`, `Preloader`,
   `Footer`, `Logo`, styles, assets, EmailJS form logic. Nothing visible
   changes.
4. Make sure `public/.htaccess` ends up next to `index.html` in the build
   output.

## Result

After `npm run build`, you'll get:

```text
dist/
  index.html
  .htaccess
  assets/
    index-[hash].js
    index-[hash].css
    hero-bg-[hash].jpg
    hero-video-[hash].mp4
    audio-[hash].mp3
    ...
```

Upload everything inside `dist/` to `public_html` and the site works,
including the EmailJS application form.

## Technical details

- Replace `@lovable.dev/vite-tanstack-config` in `vite.config.ts` with
  the standard `@vitejs/plugin-react` + `@tailwindcss/vite` setup. Output
  directory becomes `dist/`.
- Add a tiny `index.html` entry at the project root that mounts
  `src/main.tsx`.
- Create `src/main.tsx` that bootstraps `RouterProvider` with the existing
  TanStack Router routes (`__root.tsx`, `index.tsx`).
- Remove now-unused server-only files: `src/server.ts`, `src/start.ts`,
  `src/lib/error-capture.ts`, `wrangler.jsonc`, `vercel.json`. The
  `src/router.tsx` stays but is simplified for client-only.
- Keep `routeTree.gen.ts` generation via `@tanstack/router-plugin/vite`.
- `DEPLOY_CPANEL.md` and `public/.htaccess` get a small update to point to
  the new `dist/` path instead of `dist/client/`.

No UI, no styling, no form behavior changes.