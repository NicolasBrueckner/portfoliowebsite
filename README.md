# portfolio_website

Source for [portfolio.nicolasbrueckner.dev](https://portfolio.nicolasbrueckner.dev) — my personal portfolio as a game developer and software engineer.

Built with [Astro](https://astro.build). No UI framework, no CSS framework: static HTML with a small amount of vanilla JS where it's needed, and plain CSS with custom properties for theming.

## Stack

| | |
|---|---|
| Framework | Astro 6 (static output, zero integrations) |
| Styling | Plain CSS + custom properties, scoped `<style>` blocks |
| Lightbox | [glightbox](https://github.com/biati-digital/glightbox) |
| Images | Astro's built-in `astro:assets` (WebP conversion + resizing at build time) |
| Hosting | Netlify |

## Running locally

Requires Node 18+.

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve ./dist locally
```

## Structure

```
public/                     # served as-is, not processed by Astro
  Background.webp           # background for all content pages
  WeepingWillow*.webm/png   # homepage video, its low-quality variant, its still fallback
  skill_icons/              # tech icons for the About page
src/
  assets/                   # processed by astro:assets (hashed, converted, resized)
    project_images/<slug>/  # one folder per project — see "Adding a project"
    social_icons/
    ui_icons/
  components/
  layouts/
    BaseLayout.astro        # <html> shell, meta tags, header
    ContentLayout.astro     # BaseLayout + background + the scrollable card
    ProjectLayout.astro     # ContentLayout + hero, carousel, body, outbound link
  pages/
    index.astro             # homepage (video)
    about.astro             # skillset + experience
    projects.astro          # project grid
    projects/*.md           # one file per project
  styles/
    reset.css
    global.css              # CSS custom properties live here
planning/                   # drawio site flow + design sketches
```

Layouts nest: `BaseLayout` ← `ContentLayout` ← `ProjectLayout`. Anything affecting every page (meta tags, favicon, header) goes in `BaseLayout`.

## Adding a project

Projects are file-based. There's no CMS and no content collection — `projects.astro` globs the markdown directory eagerly and sorts by `date` descending.

**1. Create `src/pages/projects/YourProject.md`:**

```markdown
---
layout: "../../layouts/ProjectLayout.astro"

date: 2025-05-01
title: "Three Body Simulation"
tagline: "The chaotic interaction of a three body system visualized in a compact app"
folderName: "three_body_simulation"
link: "https://nicolasbrueckner.itch.io/three-body-simulation"
linkText: "Play or download it on itch.io"
colorFrom: "var(--secondary)"
colorTo: "var(--accent)"
---

Body copy. Plain markdown, rendered into the description card.
```

**2. Create `src/assets/project_images/<folderName>/`** — the folder name must match `folderName` exactly, that's the only link between the two.

Inside it:

- `cover.png` — shown on the projects grid. **Excluded from the carousel** by an explicit filter in `ProjectLayout.astro`.
- everything else — the carousel, in `localeCompare` order of filename. Number them (`tb_1.png`, `tb_2.png`, …) to control the sequence.

That's it — the grid and the project page both pick it up on the next build.

### Frontmatter reference

| Key | Notes |
|---|---|
| `layout` | always `"../../layouts/ProjectLayout.astro"` |
| `date` | sorts the grid, newest first. Not displayed. |
| `title` | hero `<h1>` and grid card |
| `tagline` | hero `<h2>` and grid card |
| `folderName` | must match the `project_images/` subfolder |
| `link` / `linkText` | outbound button. Leave both `""` to render an empty link (Adventure Island and Allgäu Jump do this). |
| `colorFrom` / `colorTo` | hero gradient endpoints; `colorTo` also tints the grid card |

## Theming

All colours are custom properties in `src/styles/global.css` under `:root` — a warm off-white palette (`--background`, `--primary`, `--secondary`, `--accent`, `--text`, plus transparent and hover variants). `--header-height` also lives there and is referenced by the layout maths in `ContentLayout`. Change the palette in one place.

## Homepage video

`index.astro` inlines a script that reads `navigator.connection` before attaching a `<source>`:

- `saveData` on, or `slow-2g` → drop the `<video>` entirely, use `WeepingWillowFallback.png` as a background image
- `2g` / `3g` → `WeepingWillow_lowquality.webm`
- otherwise → `WeepingWillow.webm`

`navigator.connection` isn't supported in Safari or Firefox; both fall through to the full-quality branch, which is the intended default.

## Deployment

Pushes to the default branch deploy automatically via Netlify (`npm run build`, publish `dist`).
