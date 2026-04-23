# The Murray Highlighter

Static Astro site for The Murray Highlighter, a Murray-area postcard mailer that
features local businesses and gives postcard recipients clickable contact details.

## Commands

- `npm run dev` starts the local development server.
- `npm run validate:data` checks business records, phone links, slugs, and sources.
- `npm run check` runs Astro and TypeScript checks.
- `npm run build` creates the static site in `dist`.
- `npm run preview` serves the production build locally.
- `npm run test:e2e` runs the Playwright smoke tests.

## Cheapest Hosting Notes

This site is ready for cheap static hosting. The lowest-risk free setup is
Cloudflare Pages plus a Google Form for advertiser submissions.

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22.12.0`, set by `.node-version`

After deployment, point the Namecheap domain to Cloudflare by changing the
domain's nameservers in Namecheap to the nameservers Cloudflare assigns. The
advertiser form is embedded from Google Forms, with a direct Google Forms fallback
link for mobile browsers.

## Business Data

Listings live in `src/data/businesses.ts`. Public pages do not show internal
verification notes. Rows marked `needs-verification` should be confirmed with the
advertiser before launch.
