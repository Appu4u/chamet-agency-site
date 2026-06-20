# Chamet Agency Website — Inspired Rebuild

A modern, conversion-focused marketing site for a Chamet app agency that recruits hosts and sub-agents. Same purpose and information architecture as the reference, but a fresh visual identity and rewritten copy. Includes a real contact form backed by Lovable Cloud and an app-email confirmation to the visitor.

## Pages & sections

Single landing page (`/`) with anchored sections, plus a separate `/blogs` index and `/blogs/$slug` reader (static MDX-style content seeded with 3 starter posts).

1. **Hero** — Headline, sub-headline, primary CTA "Become an Agent", secondary CTA "Join as a Host", Chamet + ChillChat download buttons, phone mockup visual.
2. **About** — Who we are, why join our agency, trust stats (countries, hosts, payouts).
3. **How to become an Agent** — Numbered steps with screenshots placeholders, agency invite link CTA.
4. **How to become a Host** — Steps, requirements, earning model.
5. **Benefits / Why us** — 6 feature cards (training, 24/7 support, weekly payouts, bonuses, global community, growth path).
6. **Earnings & Commission** — Tier table for hosts and agents.
7. **FAQ** — 8–10 accordion items.
8. **Contact** — Form (name, email, WhatsApp, role: Agent/Host, message) + WhatsApp quick link.
9. **Footer** — Links, app store badges, social, legal pages (`/privacy`, `/terms`).

## Design direction

Bold, modern, slightly editorial — not a generic SaaS template.
- Palette: deep midnight `#0B0B1A` background, warm gold accent `#E8B84A`, soft cream `#F5F0E0` for text on dark, magenta highlight `#E84393` for CTAs.
- Typography: display = "Syne" (headlines), body = "Plus Jakarta Sans".
- Layout: asymmetric hero with offset phone mockup, large numerals for steps, generous spacing, subtle grain texture, gold gradient accents.
- Motion: framer-motion fade-up on scroll, hover lift on cards, animated counter for stats.

## Tech & data

- **Stack:** existing TanStack Start + Tailwind v4 + shadcn/ui.
- **Routes added:** `src/routes/index.tsx` (rewrite), `blogs.tsx`, `blogs.$slug.tsx`, `privacy.tsx`, `terms.tsx`.
- **Components:** `Navbar`, `Hero`, `About`, `AgentSteps`, `HostSteps`, `Benefits`, `Earnings`, `FAQ`, `ContactForm`, `Footer`.
- **Lovable Cloud** enabled for the contact form:
  - Table `public.contact_submissions` (id, name, email, whatsapp, role, message, created_at) with RLS — INSERT allowed to `anon`, SELECT restricted to service role only.
  - Server function `submitContact` validates input with Zod, inserts the row, then triggers an app-email confirmation back to the visitor via the built-in email system.
- **App email:** template `contact-confirmation.tsx` thanking the visitor and linking the agency invite URL.
- **SEO:** per-route `head()` with unique title/description/OG, JSON-LD Organization on home, single H1 per page, alt text on images, semantic HTML.

## Out of scope

- Auth / user dashboards.
- CMS for blogs (starter posts hardcoded; user can ask later).
- Payments.
- Multi-language (English only for now).

## Open assumption

I'll use placeholder agency name "Chamet Agency", a placeholder WhatsApp `+1 555 000 0000`, and the public Chamet invite URL from the reference site (`companyId=3338`). You can swap these once the site is built — just paste the real values.
