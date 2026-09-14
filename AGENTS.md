# CLAUDE.md

Guidance for AI agents working on this repo. Keep it current when conventions change.

## What this is

Personal blog at [melikyan.dev](https://melikyan.dev), built with Astro + Starlight + [starlight-blog](https://github.com/HiDeoo/starlight-blog), deployed to GitHub Pages from the `astro` branch via GitHub Actions. Default PR target is `master`, but deploys happen from `astro` — confirm the target before opening PRs.

## Commands

- `npm run dev` — local dev server
- `npm run build` — runs `astro check` then `astro build` (type errors fail the build)
- `npm run preview` — preview the production build
- `npm run format` / `npm run format-check` — Prettier

Formatting: 4-space indent, double quotes, semicolons, `trailingComma: "es5"`, LF line endings. `.editorconfig` and `.prettierrc` are authoritative.

## Where content lives

- Blog posts: `src/content/docs/blog/{slug}.mdx`
- Per-post images: `src/assets/{slug}/*.{png,webp,jpg}` (one folder per post, slug matches the MDX filename)
- Site-wide pages: `src/content/docs/` and `src/pages/`
- Content schema: `src/content.config.ts` (extends Starlight docs schema with `starlight-blog`'s `blogSchema`)

## Post frontmatter

```yaml
---
title: Short, sentence-case title
date: YYYY-MM-DD
description: One-line hook, sometimes ending in ! — shows in listings and meta
tags:
    - PascalCase
    - Or Title Case With Spaces
authors: bugron
---
```

- Quote the `title` if it contains a colon (YAML requirement).
- `date` is an unquoted ISO date.
- `tags` reuse existing tags where possible — skim `src/content/docs/blog/*.mdx` before inventing new ones.
- `authors: bugron` is the only author; the full author record is defined in `astro.config.mjs` under `starlightBlog({ authors: { bugron: ... } })`.

## Post structure and voice

The two existing posts (`bisecting-bugs-with-git.mdx`, `how-to-quickly-setup-a-blog.mdx`) are the style reference.

- **Voice:** first-person, conversational, debugging-journal style. Short asides are fine ("Interesting.", "Hmm,", "Sweet.", "Or so I thought..."). Self-deprecating is on brand; corporate/marketing tone is not.
- **Opening:** jump straight into the problem or motivation — no "In this post, we will..." preamble.
- **Headings:** `##` for main sections, `###` for subsections. No H1 (Starlight renders the frontmatter `title`). Common section names: `## The problem`, `## <action>`, `## Conclusion`.
- **Closing:** a `## Conclusion` section with a short recap and a farewell line ("Until next time 👋", "Until next time!", "🚀").
- **Emoji:** sparingly, at emotional beats (🚀 at a successful ship, 😅 at self-deprecation, 👋 at sign-off, 🤷‍♂️ at inexplicable behavior). Don't sprinkle them throughout prose.
- **Parenthetical asides** for tool descriptions are idiomatic: "(Starlight uses [Pagefind][pagefind] to implement full-text search)".

## MDX conventions

### Imports

Place imports immediately after the frontmatter, before any prose:

```mdx
---
title: ...
---

import { Image } from "astro:assets";
import heroImage from "../../../assets/my-post/hero.png";
import AllPackageManagers from "../../../components/AllPackageManagers.astro";

## First section

...
```

### Images

Two patterns, both in use:

1. **Plain markdown** for inline screenshots, caption becomes alt text:
    ```md
    ![Desktop search UI missing](../../../assets/my-post/screenshot.png)
    ```
2. **`<Image />` from `astro:assets`** when you need to constrain width or center. Import the asset at the top and wrap for layout:
    ```mdx
    <div class="sl-flex justify-center">
        <Image src={myImage} alt="Descriptive alt" width="360px" />
    </div>
    ```

Always write meaningful alt text. `starlight-image-zoom` auto-enables click-to-zoom — don't add zoom manually.

### Code blocks

Use [Expressive Code](https://expressive-code.com/)'s Starlight defaults:

- Language required: ` ```js `, ` ```bash `, ` ```yaml `, ` ```diff `
- **Title:** ` ```js title="astro.config.mjs" ` — add this whenever the snippet represents a real file.
- **Line highlights:** `{12,20}` or `{3-5}` appended after the language/title.
- **Insertion highlights:** `ins={6-8}` for green "added" bands. Pairs well with `diff`-syntax blocks.
- **Terminal output** (copy-pasted runs) goes in ` ```bash ` blocks including the prompt line `➜  bugron.github.io git:(branch) command`.
- **Diffs:** use ` ```diff title="git show <sha>" {12,20} ` to show a diff with specific lines called out.

### Admonitions

Starlight `:::note` / `:::tip` / `:::caution` / `:::danger`:

```md
:::note
Context or caveat that sits beside the main flow.
:::
```

Use sparingly — usually once per post for a "this isn't always true" disclaimer.

### Links

**Reference-style only**, collected in a block at the bottom of the file under an MDX comment:

```mdx
Some prose linking to [Astro][astro] and [Starlight][starlight].

{/* URL section */}
[astro]: https://astro.build/
[starlight]: https://starlight.astro.build/
```

- The comment `{/* URL section */}` is the canonical marker — keep it.
- Reference keys are camelCase (`gitBisect`, `astroCompress`, `starlightBlog`).
- Keep trailing slashes consistent with what the target site uses.
- `starlight-links-validator` runs at build time but **excludes `/blog/`**, so cross-post links aren't validated. Double-check them manually.

### Other components available

- `<AllPackageManagers pkg="..." type="create" args="..." />` from `starlight-package-managers` — use for any "install this" instruction; it renders tabs for npm/pnpm/yarn/bun automatically. Don't hand-write `npm install` snippets.

## Site config touchpoints

- `astro.config.mjs` — Starlight config, integrations, author definition, analytics, social links.
- `src/constants.ts` — `BLOG_URL` and similar constants.
- `src/components/overrides/` — Starlight component overrides; check here before adding new behavior to avoid duplication.
- `src/styles/custom.css` — global CSS, loaded via `customCss` in Starlight config.

## Before claiming a post is "done"

1. `npm run build` passes (catches broken image imports, type errors, link-validator failures).
2. Visually check `npm run dev` — verify images render, code highlights land on the right lines, and the post appears in the blog index.
3. Alt text is meaningful on every image.
4. All reference-style link keys resolve (no dangling `[text][key]`).
5. Tags match the casing of existing tags where semantically equivalent.

## What not to do

- Don't add a `layout:` frontmatter field — `starlight-blog` handles layout via the schema.
- Don't write an H1 inside the post body.
- Don't inline URLs in prose; use reference-style.
- Don't hand-roll install command snippets; use `<AllPackageManagers />`.
- Don't commit directly to `astro` without a PR unless the user explicitly asks — that branch deploys to production.
