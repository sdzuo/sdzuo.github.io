# Portfolio Redesign Collaboration Guide

## Scope and safety

- Work only on the `portfolio-redesign` feature branch unless the user explicitly authorizes another branch.
- Preserve pre-existing uncommitted changes. Never use `git reset`, `git clean`, stashing, or destructive checkout commands without explicit authorization.
- Do not push, deploy, or modify `gh-pages` without explicit user authorization.
- This portfolio remains a static React and Vite site; do not introduce Angular, a backend, database, CMS, authentication, or server runtime.
- Preserve valid existing portfolio facts, contact destinations, project links, documents, icons, images, screenshots, and videos. Do not invent content.

## Agent workflow

- The root agent is the sole orchestrator and may delegate only directly; subagents must not delegate further.
- During planning, use read-oriented agents for audit, UX, review, validation, and release work. Do not make production-code edits until the user approves `docs/portfolio-redesign-plan.md`.
- The frontend implementer is the only agent permitted to change production application code after approval. Do not run parallel production-code editors.
- Report evidence with exact repository paths. Categorize review findings as Blocking, Recommended, or Optional.

## Engineering expectations

- Prefer TypeScript, semantic HTML, responsive CSS, and small reusable components.
- Keep dependencies minimal. Validate clean installation, linting, type checking, production build, static assets, keyboard navigation, focus visibility, responsive behavior, and GitHub Pages base-path behavior before release.
- Keep custom-domain and `CNAME` behavior intact unless the user explicitly approves a change.
