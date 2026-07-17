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


Deploys automatically via Netlify.
