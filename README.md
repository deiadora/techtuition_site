[techtuition-ai-README.md](https://github.com/user-attachments/files/29910663/techtuition-ai-README.md)
# techtuition.ai

> Consulting & training for content teams in the AI era — advisory, hands-on builds, team training.

## What this is

Deiadora's consulting practice for content design leaders navigating AI. Three engagements (advisory, hands-on builds, team training), first-person track record, how engagements start, and a market-research card for the workshop in development.

## Stack

Single-file static site — one `index.html`, no build step, no frameworks, no dependencies beyond Google Fonts.

Shared deiadora ecosystem design system:
- CSS custom properties; Cormorant Garamond / Exo 2 / DM Sans
- Three themes (default, dark, light) with system-preference tracking, persisted via `localStorage`
- A/A text-size toggle (115% scaling), persisted via `localStorage`
- WCAG AA contrast verified for all text/background pairs in all three themes
- Skip link, semantic sections, `prefers-reduced-motion` support

## Deploy

Cloudflare Pages. No build command; root directory as output. Replace placeholder links (mail subjects, audio files, or invite URLs) noted in HTML comments where present.

## Ecosystem

Part of the deiadora ecosystem — ten sites, one design system, one author. Front door: [deiadora.com](https://deiadora.com).

© Deiadora Blanche. All rights reserved.
