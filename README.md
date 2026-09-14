# melikyan.dev

[![Deploy Astro blog to GitHub Pages](https://github.com/bugron/bugron.github.io/actions/workflows/deploy.yml/badge.svg?branch=astro)](https://github.com/bugron/bugron.github.io/actions/workflows/deploy.yml)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build/)

Source for [melikyan.dev](https://melikyan.dev/), Arsen Melikyan's personal blog about web development, debugging, cybersecurity, and software engineering.

The site is built with [Astro](https://astro.build/), [Starlight](https://starlight.astro.build/), and [starlight-blog](https://github.com/HiDeoo/starlight-blog). It is generated as a static site and deployed to GitHub Pages.

## Local development

Node.js 22.12 or newer and npm are required.

```bash
npm ci
npm run dev
```

The development server is available at [http://localhost:4321](http://localhost:4321).

## Commands

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm ci`               | Install the locked dependency versions   |
| `npm run dev`          | Start the local development server       |
| `npm run build`        | Type-check and build the production site |
| `npm run preview`      | Preview the production build locally     |
| `npm run format`       | Format the project with Prettier         |
| `npm run format-check` | Check formatting without modifying files |
| `npm run astro -- ...` | Run Astro CLI commands                   |

## Project structure

```text
.
├── public/                  # Static assets copied as-is
├── src/
│   ├── assets/              # Images processed by Astro
│   ├── components/          # Site and Starlight component overrides
│   ├── content/
│   │   ├── docs/            # Homepage and blog posts
│   │   └── i18n/            # Starlight UI translations
│   ├── pages/               # Standalone Astro pages
│   └── styles/              # Global styles and Tailwind theme
├── astro.config.mjs         # Astro, Starlight, and plugin configuration
└── src/content.config.ts    # Content loaders and schemas
```

Blog posts live in `src/content/docs/blog/`. Assets specific to a post live in a matching `src/assets/<post-slug>/` directory.

## Deployment

The [`deploy.yml`](.github/workflows/deploy.yml) workflow builds and deploys the site to GitHub Pages whenever changes are pushed to the `astro` branch. The workflow can also be run manually from the Actions tab.

The repository's default pull request target is `master`; production deployment happens from `astro`.
