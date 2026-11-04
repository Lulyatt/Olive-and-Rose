# Olive & Rose

A multi-page marketing site for a boutique hair salon — built as a **portfolio demonstration** of front-end design and implementation.

## Disclaimer

**Olive & Rose is a fictional business.** The salon, address (28 Rosewood Lane, Guildford), phone number, email, team, pricing, testimonials, and photography are **placeholders for demonstration only**. They do not represent a real company or operating salon. Booking links point to third-party platforms for UX demo purposes; the contact form is client-side validated and does not submit to a live backend.

This project is intended to showcase layout, typography, accessibility, and code quality — not to provide commercial services or accurate local business information.

## Purpose

The site models a premium independent salon brand: editorial typography, a cohesive rose-and-gold design system, and a calm, content-led experience across home, services, gallery, about, and contact. Content lives in typed modules under `src/content/` so copy and media can be updated without touching page structure.

## Technology

| Area | Stack |
|------|--------|
| Framework | [React 19](https://react.dev/) with [TanStack Start](https://tanstack.com/start) and [TanStack Router](https://tanstack.com/router) (file-based routes, SSR-ready build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/), central palette in `src/styles.css` |
| UI | [Radix UI](https://www.radix-ui.com/) primitives and shadcn-style components under `src/components/ui/` |
| Language & tooling | TypeScript, [Vite](https://vite.dev/), ESLint, Prettier |
| Validation | [Zod](https://zod.dev/) on the contact form |
| Tests | [Vitest](https://vitest.dev/) with Testing Library (routing smoke test) |

Production builds use [Nitro](https://nitro.build/). Local/`npm run build` defaults to a Cloudflare-oriented preset (Lovable). On Netlify, `netlify.toml` sets `NITRO_PRESET=netlify` so static assets land in `dist` and SSR runs via Netlify Functions.

## Features & functionality

- **Five routes** — Home, About, Services, Gallery, Contact with per-page metadata for SEO and social previews.
- **Shared chrome** — Sticky header with responsive navigation, footer with address and hours from site config, skip link, and 404/error boundaries.
- **Design system** — Dusty rose, blush, warm ivory, champagne gold, and charcoal tokens; serif/sans pairing (Cormorant Garamond, Jost); scroll-reveal and image-hover treatments with reduced-motion support.
- **Services** — Categorised menu with descriptions and indicative pricing from content modules.
- **Gallery** — Grid with captions; full-screen lightbox, keyboard-friendly navigation, and focus management.
- **Contact** — Enquiry form with accessible labels and inline validation; opening hours and embedded map; booking CTA to external scheduling (Fresha demo URL).
- **Assets** — Custom “O&R” favicon and apple touch icon generated from brand typography.

## Local development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

| Command | Description |
|---------|-------------|
| `npm run build` | Production build |
| `npm run preview` | Preview production output |
| `npm test` | Run tests |
| `npm run lint` | ESLint |

## Deploying to Netlify

Connect the GitHub repo and use the settings in **`netlify.toml`** (do not set the publish directory to `dist/client`):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 22 (via `NODE_VERSION` in `netlify.toml`)

If the site was created with a wrong publish path in the Netlify UI, either remove those overrides so the TOML file applies, or set **Publish directory** to `dist` manually. Redeploy after pushing `netlify.toml`.

## License & attribution

Portfolio work. Site design credit: [Built-By-Luke](https://built-by-luke.netlify.app/).
