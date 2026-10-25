# jacklinzhouxing.github.io

Source for <https://jacklinzhouxing.github.io/> — the personal academic website of Jack Linzhou Xing,
Assistant Professor in the Division of Public Policy at HKUST.

Built with Vite 8, React 18, TypeScript, Tailwind CSS and shadcn/ui. Deployed to GitHub Pages by
GitHub Actions on every push to `main`.

## Local development

Requires Node 20.19+ or 22.12+ (Vite 8).

```bash
npm install --legacy-peer-deps
npm run dev        # http://localhost:8080
```

> `npm ci` fails on this repo: `lovable-tagger` and `vite@8` declare conflicting peer ranges, and
> npm 10 rejects `npm ci --legacy-peer-deps` outright. Use `npm install --legacy-peer-deps`.
> CI does not hit this because it installs with Bun — see [Deployment](#deployment).

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm test` | Vitest suite |
| `npm run lint` | ESLint |

## Deployment

`.github/workflows/static.yml` builds and publishes the site on every push to `main`, and can also be
run manually via `workflow_dispatch`.

The workflow installs and builds with **Bun** (`bun install` / `bun run build`), not npm — that is why
`bun.lock` is committed alongside `package-lock.json`. If you add or upgrade a dependency, update both
lockfiles, or CI will build against a different dependency tree than your local npm install.

The build output in `dist/` is uploaded as a Pages artifact. There is no `CNAME`; the site is served
from the `github.io` subdomain, so Vite's `base` stays `/`.

## Project structure

```
index.html              Page shell, meta tags, and the SPA deep-link decoder (see below)
public/                 Served verbatim at the site root — CV, headshot, favicon, 404.html
src/
  main.tsx              Entry point
  App.tsx               Route table
  pages/                Index plus the four research subpages
  components/           One component per homepage section
  components/ui/        shadcn/ui primitives
  assets/               Bundled assets (headshot)
```

## Where to edit content

The homepage is a single scrolling page; each section is its own component.

| What | File |
| --- | --- |
| Bio and intro paragraphs | `src/components/HomeSection.tsx` |
| News items | `src/components/NewsSection.tsx` — the `newsItems` array, newest first |
| Research pillars | `src/components/ResearchSection.tsx` |
| Research subpages | `src/pages/Research*.tsx` |
| Teaching | `src/components/TeachingSection.tsx` |
| Media coverage (EN / 中文) | `src/components/PublicEngagementSection.tsx` |
| CV block, publications, awards | `src/components/CVSection.tsx` |
| Contact details, social links | `src/components/ContactSection.tsx` |
| Downloadable CV | `public/Xing_CV.pdf`, linked as `/Xing_CV.pdf` |
| Nav labels and anchors | `src/components/Navbar.tsx` |

News entries are plain JSX, so links and emphasis go inline:

```tsx
{
  date: "August 12, 2026",
  content: (
    <>
      Interviewed by Will Langley in <em>The Financial Times</em> article:{" "}
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Title
      </a>
      .
    </>
  ),
},
```

## Deep links depend on a pair of files — do not remove either half

The site is a client-side SPA hosted on GitHub Pages, which has no server-side rewrite. Deep links
such as `/research/automation` work through two files that only function together:

1. **`public/404.html`** — GitHub Pages serves this for any path that is not a real file. It bounces
   the visitor to `/?/<original-path>`.
2. **`index.html`** — an inline script in `<head>` reads that query string and restores the original
   path with `history.replaceState`, *before* React Router reads `window.location`.

Remove either one and every `/research/*` URL will silently render the homepage instead of the
requested page, while still returning HTTP 404 to crawlers. If you add a route, no extra work is
needed — but keep both halves in place.

## Contact form

`ContactSection.tsx` posts to Formspree at `https://formspree.io/f/mpqooyev`. Deliveries are handled
entirely by Formspree; there is no backend in this repository. To send submissions elsewhere, change
the endpoint in that component.
