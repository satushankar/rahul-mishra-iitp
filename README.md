# Dr. Rahul Mishra — Academic Research Platform

Faculty research website for **Dr. Rahul Mishra**, Assistant Professor, Department of Computer Science and Engineering, **IIT Patna**.

Research areas: Deep Learning · Fog Computing · Internet of Things · Wireless Sensor Networks · Smart Sensing.

## Highlights

- **9 pages**: Home, Research, Publications, Experience, Achievements, Activities, Contact.
- **45 scholarly works** (29 journals + 16 conferences) with filter, search-by-topic, and a publications-by-year visualization.
- Light + dark themes, fully responsive, **WCAG 2.2 AA** (0 axe violations).
- SEO: sitemap, robots, JSON-LD (`Person` + `ScholarlyArticle`), Open Graph.
- All content sourced from the official IITP profile (faithful digital twin — no fabricated data).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 · TypeScript
- Tailwind CSS v4 (CSS-first `@theme` tokens)
- Fonts: Playfair Display (display) + Nunito (body), self-hosted via `next/font`
- `next-themes` for theming · `lucide-react` icons

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy

Optimized for [Vercel](https://vercel.com) — zero config. Push to the connected repo and Vercel builds/deploys automatically.

## Project Structure

```
src/
├── app/            # routes (one folder per page) + sitemap/robots/manifest
├── components/     # UI primitives, header/footer, page sections
├── data/           # typed content modules (profile, publications, …)
└── lib/            # helpers (formatting, works model, cn)
```

---

Content faithfully extracted from the official IIT Patna faculty profile. Design adapted from a portfolio reference, transformed into an academic research platform.
