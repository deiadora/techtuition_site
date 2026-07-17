# techtuition.ai

> AI enablement & organizational capability consulting — one method (Diagnose → Redesign → Build → Enable → Leave), built to outlive the engagement.

## What this is

Deiadora's consulting practice for organizations turning AI mandates into operating capability. Five pages: home (the category, why adoption stalls, the method in miniature, proof, three doors in), method (the five-move arc, the eight-part enablement framework, what this isn't), engagements (five offers — fixed-fee AI Capability Diagnostic, Pilot-to-Practice workflow redesign, Fractional AI Enablement Lead, executive advisory, in-house curriculum), proof (five case studies told in six beats, each ending with what's still running), and about (one discipline held through two decades of technological change).

## Stack

Five-file static site — `index.html`, `method.html`, `engagements.html`, `proof.html`, `about.html`. No build step, no frameworks, no dependencies beyond Google Fonts.

Shared deiadora ecosystem design system:
- CSS custom properties; Cormorant Garamond / Exo 2 / DM Sans
- Three themes (default, dark, light) with system-preference tracking, persisted via `localStorage`
- A/A text-size toggle (115% scaling), persisted via `localStorage`
- WCAG AA contrast verified for all text/background pairs in all three themes
- Skip link, semantic sections, active-page nav state, `prefers-reduced-motion` support
- New components in the shared token system: stat blocks, numbered method steps, offer cards, six-beat case cards

## Ecosystem

Part of the deiadora ecosystem — ten sites, one design system, one author. Front door: [deiadora.com](https://deiadora.com).

© Deiadora Blanche. All rights reserved.
