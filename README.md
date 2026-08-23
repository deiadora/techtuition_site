# Techtuition

Site for Techtuition — designing digital products, content ecosystems, and AI interfaces that respect human trust and emotional agency.

Live at [techtuition.ai](https://techtuition.ai).

## Structure

```
index.html                    the whole site (single file: home + contact, toggled via JS)
netlify.toml                  build config + redirect for /api/contact
netlify/functions/contact.js  serverless function that files contact form
                               submissions as GitHub Issues
favicon.svg / favicon.ico     favicon set
og-image.png                  social sharing preview image (1200×630)
```

## Features

- Light/dark theme, respecting system preference on first load, with a manual toggle
- Adjustable text size for accessibility (A- / A / A+)
- Contact form → GitHub Issues via a Netlify serverless function (no database, no third-party form service)
- Testimonial and podcast sections are built but hidden (`hidden` attribute) until there's real content for them

## Local development

This is a static site with one serverless function — no build step. Open `index.html` directly to preview the design, though the contact form will only work once deployed (it needs `netlify/functions/contact.js` running server-side).

To develop with the function working locally, use the [Netlify CLI](https://docs.netlify.com/cli/get-started/): `netlify dev` from this folder.

## Deployment

Hosted on Netlify, connected to this repo for auto-deploys on push to `main`. DNS for techtuition.ai is managed through Cloudflare, pointed at Netlify's load balancer.

Required environment variables (set in Netlify → Site configuration → Environment variables):

- `GITHUB_TOKEN` — fine-grained personal access token, scoped to Issues: Read and write on this repo only
- `GITHUB_REPO` — `username/repo-name` of wherever contact form submissions should land as Issues

## To do

- [ ] Add real testimonial and remove `hidden` from that section
- [ ] Decide on podcast/resources section — keep, replace, or remove
