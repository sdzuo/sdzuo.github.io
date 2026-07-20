# Portfolio Redesign and Refactor Plan

> Status: implementation in progress on `portfolio-redesign`. The user approved implementation on 2026-07-20. Deployment and remote pushes still require explicit user approval.

## 1. Executive summary

Redesign the existing React/Vite portfolio as a polished, static, single-page software-developer portfolio. The redesign will retain verified identity, skills, projects, links, and locally stored media while replacing the current two-route, hover-dependent presentation with accessible semantic sections and responsive anchor navigation.

The intended direction is **engineer's field notes**: editorial and restrained rather than template-like—warm neutral canvas, high-legibility ink text, muted teal detail, one sparing warm CTA color, strong typographic hierarchy, and project media as the visual focus. No backend, CMS, authentication, database, Angular migration, or server runtime will be introduced.

All work remains on `portfolio-redesign`. The only pre-existing worktree modification is `vite.config.ts`; it is explicitly preserved and is not part of this planning work.

## 2. Verified current-state audit

### Application and build

- React 18, TypeScript, and Vite. Entry point: `src/main.tsx`; application router: `src/App.tsx`.
- The app currently uses `HashRouter` with `/` for `src/pages/home.tsx` and `/projects` for `src/pages/projects.tsx`.
- Yarn is the package manager (`yarn.lock`). Scripts in `package.json` are `dev`, `build` (`tsc && vite build`), `lint`, `preview`, `predeploy`, and `deploy`.
- `vite.config.ts` uses `@vitejs/plugin-react` and an `@` alias for `src`; it currently has no explicit `base`. A pre-existing, uncommitted `server.host: true` setting must not be overwritten.
- Current production build succeeds when invoked through the local Vite executable. It emits a large main JavaScript chunk (about 1.65 MB / 592 KB gzip) and includes the 1.86 MB project video.
- `yarn build` and `yarn lint` did not resolve local Windows `.cmd` shims in this shell; direct `node_modules/.bin/*.cmd` commands did. This is an environment issue to re-check after a clean install.
- ESLint currently cannot run: `.eslintrc.cjs` extends `plugin:react/recommended`, but `eslint-plugin-react` is not in `package.json`.

### Static hosting and release

- `package.json` uses `gh-pages -d dist`; there are no tracked `.github/workflows` files. Deployment is direct local publishing, not GitHub Actions.
- `predeploy` builds and writes `goatmil.net` to `dist/CNAME`; `homepage` is `https://goatmil.net`.
- Root `CNAME` currently has two lines: `goatmil.net` and `www.goatmil.net`, while generated `dist/CNAME` has only `goatmil.net`. Treat `goatmil.net` as the observed deployed canonical hostname until the user confirms intended `www` behavior.
- Imported source assets are Vite base-safe. Root hosting is appropriate for the custom domain and this user-site repository name. The implementation will make `base: "/"` explicit, while retaining a documented subpath test only if hosting changes.
- Remote Pages settings and remote `gh-pages` state were not independently verified because network access to GitHub was unavailable. No remote state was modified.

### Content, code, and quality findings

- `src/style.css` is global; `src/pages/home.css` duplicates parts of it and is unused. `src/Components/navbar.css` is empty.
- `src/Layout.tsx` and `src/Components/navbar.tsx` are not used by the routed app.
- Current CSS has one narrow breakpoint, fixed project-media dimensions, a flex `body`, hover scaling that can overflow, and text constrained to 50% width on mobile.
- `src/pages/projects.tsx` nests a `<body>` inside the React tree, uses nonfunctional `<a>` elements for stack text, and presents URLgoat media with pointer-hover-only playback.
- Current semantic structure lacks a consistent `h1`/heading hierarchy, skip link, focus-visible rules, reduced-motion support, and keyboard-equivalent video playback. `index.html` has only a generic title and no useful SEO metadata.

## 3. Asset and content inventory

| Item                        | Verified source                                                 | Current use / preservation requirement                                                                                                                 |
| --------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name, role, summary, skills | `src/pages/home.tsx`                                            | Preserve factual identity: Shamil Auwal, Software Engineer; `.NET`, React, Angular, Mathematics, Teaching; self-taught end-to-end summary.             |
| GitHub                      | `src/pages/home.tsx`                                            | Preserve exactly: `https://github.com/sdzuo`.                                                                                                          |
| LinkedIn                    | `src/pages/home.tsx`                                            | Preserve exactly: `https://www.linkedin.com/in/shamil-al/`.                                                                                            |
| Résumé                      | `src/pages/home.tsx`                                            | Preserve existing Google Docs destination exactly: `https://docs.google.com/document/d/1o0O9I6fcGqpV5mmxDO4cmy5v5ys82YHzJC4-Px4eJlk/edit?usp=sharing`. |
| Email                       | `src/pages/home.tsx`                                            | Preserve destination `mailto: sdzuojp@gmail.com`; normalize the source formatting space only, not the destination.                                     |
| URLgoat                     | `src/pages/projects.tsx`                                        | Preserve label, stack (`.NET`, Angular, SQL Server, Docker), and `https://github.com/sdzuo/goaturl`.                                                   |
| URLgoat video               | `src/assets/URLgoat-demo.mp4`                                   | Preserve and make viewable without pointer hover; locally imported, about 1.86 MB.                                                                     |
| Spicy Bengal                | `src/pages/projects.tsx`                                        | Preserve label, stack (Penpot, React, .NET, SQL Server, Docker, Nginx), and `https://spicybengal.com`.                                                 |
| Spicy Bengal screenshot     | `src/assets/Spicybengal.png`                                    | Preserve and present with accurate alt text; 1500×874, about 1.04 MB.                                                                                  |
| Local résumés               | `src/assets/resume.pdf`, `src/assets/resume_2024.pdf`           | Neither is linked. User authorized their removal; the Google Docs résumé remains primary.                                                              |
| Other image                 | `src/assets/comingsoon.jpg`                                     | Retain untouched. It is not currently referenced; determine whether it has a future intentional role before removal.                                   |
| Icons/fonts                 | Font Awesome packages; Google Raleway import in `src/style.css` | Preserve meaningful visible contact icons. Prefer system typography unless a hosted font is explicitly justified and tested.                           |
| CNAME/domain intent         | `CNAME`, `package.json`, `predeploy`                            | Preserve custom-domain deployment behavior pending canonical-host confirmation.                                                                        |

**Spicy Bengal media constraint resolved:** the local video is URLgoat media, not Spicy Bengal media. Spicy Bengal has a screenshot asset only; preserve its screenshot and project link.

## 4. Requirements that must be preserved

- React and Vite; entirely static GitHub Pages-compatible output.
- The feature branch `portfolio-redesign`; never push/deploy during planning or without explicit authorization.
- All valid current contact destinations, project destinations, verified technologies, identity, skills, summary, local PDFs, screenshot, and URLgoat video.
- Spicy Bengal screenshot and link, and any user-supplied/identified Spicy Bengal video.
- Custom-domain/CNAME behavior, using the confirmed canonical host.
- Factual integrity: no invented employers, experience, dates, outcomes, metrics, availability, locations, project details, or technology claims.

## 5. Proposed design direction

Use a restrained editorial product-design system—an "engineer's field notes" feel rather than a generic developer template. A warm off-white background (`#F7F6F2` family), deep navy-charcoal text (`#17212B` family), desaturated teal accent, and a single muted coral/orange CTA create structure without a full-page gradient, glassmorphism, stock imagery, or decorative clutter.

- Display headings: distinctive system serif; body/UI: optimized system sans stack. This avoids external-font render cost by default.
- Content container: approximately 70–76rem maximum width; mobile gutters from 1.25rem, growing to 2–3rem.
- Spacing: 4px rhythm, roughly 5rem section gaps on mobile and 8–10rem on desktop.
- Surfaces: fine borders, 12–16px radii, restrained shadows only where elevation helps comprehension.
- Project work is dominant: substantial alternating desktop entries, but DOM reading order remains logical.
- Motion is modest (150–200ms feedback only) and disabled/reduced under `prefers-reduced-motion`.

## 6. Proposed information architecture

1. Skip link and persistent header: name wordmark; anchor navigation for About, Work, Skills, Contact; accessible mobile disclosure navigation.
2. Hero: `Software Engineer` eyebrow, one `h1` (`Shamil Auwal`), verified summary, "View selected work" and "Contact" anchors, compact `.NET · React · Angular` line.
3. About: an "End-to-end by design" section using only the existing self-taught, interface, backend/server, deployment, and security statements.
4. Selected projects: URLgoat video-led entry and Spicy Bengal screenshot-led entry, technology lists, and accurately named external links.
5. Technical foundations: only verified skill tags, organized as Web development (`.NET`, React, Angular) and Additional strengths (Mathematics, Teaching).
6. Contact: visible-text GitHub, LinkedIn, Résumé, and Email controls with existing destinations.
7. Footer: name, optional generated current year, and GitHub/LinkedIn links. Do not add location, availability, or experience claims.

An Experience section is deliberately omitted: the repository has no verified employment, employer, dates, responsibilities, or measurable results. It may be added only from user-provided facts.

## 7. Proposed responsive behavior

| Range     | Behavior                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 320–479px | Single column, 1.25rem gutters, full-width media, disclosure navigation, naturally wrapping tags, stackable actions; metadata precedes media.          |
| 480–899px | Stacked hero and projects with wider media; inline navigation only if all targets fit without compression.                                             |
| 900px+    | Sticky bordered header; two-column hero with a restrained verified-skill panel; alternating project grid treatment while preserving DOM reading order. |

At all sizes: no horizontal overflow, readable line lengths, 44px practical targets, fluid image/video sizing, and no essential interaction that needs hover.

## 8. Proposed accessibility requirements

- Semantic `<header>`, named `<nav>`, `<main>`, named `<section>`, and `<footer>` landmarks.
- One `h1`; section `h2`s; project `h3`s.
- Visible skip link, logical keyboard order, visible 2–3px contrast-compliant `:focus-visible` outline, and no keyboard traps.
- Text-labeled controls; contact icons are decorative when paired with text. External destinations are clear from visible text or accessible names.
- Semantic lists for technology stacks; no empty/nonfunctional anchors.
- Accurate image alt text; decorative assets hidden from assistive technology. Video is keyboard reachable, pauseable, labeled, and has native controls or an equivalent visible control.
- Meet WCAG AA contrast for text, controls, tags, and focus rings.
- Under reduced motion, disable smooth scroll, transforms, autoplay, and nonessential fades/slides; project media remains usable.

## 9. Proposed React/Vite architecture

- **Language:** retain TypeScript. Existing strict TypeScript configuration and small static data model make it the cleanest choice.
- **Routing:** remove React Router after approval and use one section-based page with anchor navigation. The content is a single narrative and does not justify two route-specific documents; anchor navigation works on static hosting and improves scanability.
- **Data:** define typed static portfolio data for navigation, skills, projects, links, and project media. Keep only source-supported facts in the data module.
- **Styling:** CSS modules or scoped component CSS plus a compact global token/reset stylesheet. Prefer native CSS custom properties, grid, flexbox, and media queries; no CSS framework.
- **Assets:** retain source imports from `src/assets` for base-safe hashing. Use `loading="lazy"`/`decoding="async"` for below-fold image media, `preload="metadata"` for the video, and avoid downloading nonessential media early.
- **Metadata:** set a meaningful title, description grounded in the existing summary, canonical `https://goatmil.net/`, Open Graph/Twitter title/description, `robots`, theme color, and a favicon. Do not create an Open Graph image from invented content; use a supplied/approved asset or omit image metadata.
- **Pages base:** configure Vite `base: "/"` for the verified custom domain. Maintain `dist/CNAME` generation and test emitted assets at root. If the hosting target changes to repository subpath, change `base` deliberately and test that configuration.
- **State:** local component state only for mobile navigation and optional video control; no global state, data fetching, or backend abstractions.

## 10. Proposed component tree

```text
App
├── SkipLink
├── SiteHeader
│   ├── Brand
│   └── PrimaryNav (desktop links / mobile disclosure)
├── Main
│   ├── Hero
│   ├── AboutSection
│   ├── ProjectsSection
│   │   └── ProjectCard × 2
│   │       ├── ProjectMeta
│   │       ├── TechnologyList
│   │       ├── ProjectLinks
│   │       └── ProjectMedia (ImageMedia or VideoMedia)
│   ├── SkillsSection
│   │   └── SkillGroup × 2
│   └── ContactSection
│       └── ContactLink × 4
└── SiteFooter
```

## 11. Proposed file and directory structure

```text
src/
  assets/                         # retained media and documents
  components/
    ContactLink.tsx
    ProjectCard.tsx
    ProjectMedia.tsx
    SiteHeader.tsx
    SkillGroup.tsx
  data/
    portfolio.ts                  # typed, source-backed content and URLs
  sections/
    AboutSection.tsx
    ContactSection.tsx
    Hero.tsx
    ProjectsSection.tsx
    SkillsSection.tsx
  styles/
    globals.css                   # reset, tokens, typography, accessibility helpers
    layout.css                    # section/grid/responsive rules
  App.tsx
  main.tsx
```

Exact file names may be simplified during implementation, but the principles are fixed: static typed data, reusable components where repetition warrants them, and no framework-scale abstraction.

## 12. Existing files to preserve

- `src/assets/URLgoat-demo.mp4`, `src/assets/Spicybengal.png`, `src/assets/resume.pdf`, `src/assets/resume_2024.pdf`, `src/assets/comingsoon.jpg`.
- `CNAME` and the relevant `package.json` deployment intent, pending canonical-domain confirmation.
- `yarn.lock`, TypeScript settings, the Vite alias where it remains useful, and verified content/destinations contained in the existing page files.
- The pre-existing `vite.config.ts` modification, unchanged unless it must be carefully incorporated during approved implementation.

## 13. Existing files to modify after approval

- `src/App.tsx`: replace routes with the semantic single-page composition.
- `src/main.tsx`: retain entry behavior and update global-style import if needed.
- `src/style.css`: replace with the agreed token/layout system, or migrate its role to `src/styles/globals.css`.
- `src/pages/home.tsx`, `src/pages/projects.tsx`: move verified content into sections/data, then retire after replacement is complete.
- `src/Components/HoverVideo.tsx` and `src/Components/HoverVideo.css`: replace hover-only behavior with accessible project video media.
- `index.html`: title, description, canonical, social/robots/theme metadata, and favicon references.
- `vite.config.ts`: add explicit `base: "/"` while preserving the existing `server.host` change.
- `package.json`, `yarn.lock`, `.eslintrc.cjs`: only for approved dependency/script/lint corrections.

## 14. Existing files that may be removed after approval

- `src/Layout.tsx` and `src/Components/navbar.tsx`: unused by the current application and superseded by `SiteHeader`.
- `src/pages/home.css`: unused duplicate styling.
- `src/Components/navbar.css`: empty file.
- `src/pages/home.tsx`, `src/pages/projects.tsx`, and old hover-video files: only after their verified content/media have been migrated and rendered checks pass.
- Unused packages (`react-router-dom`, `@vitejs/plugin-react-swc`, perhaps `@fortawesome/fontawesome-free`): only after source/package usage is re-audited; do not remove Font Awesome packages while any retained contact icon uses them.

No existing asset or document may be deleted in this project merely because it is unused today.

## 15. New files to create after approval

- The typed `src/data/portfolio.ts` content model.
- The section and reusable component files listed in Section 11.
- Scoped/global stylesheet files as selected during implementation.
- Optional favicon asset only if created from approved existing material or user-provided; otherwise use a minimal code-native SVG favicon.
- `playwright.config.ts` and one compact `tests/portfolio.spec.ts` only if the proposed dev-only Playwright validation is approved.

Planning files already created: `AGENTS.md`, `.codex/config.toml`, six `.codex/agents/*.toml` role configurations, and this plan.

## 16. Dependency changes and justification

No dependencies were installed during planning.

- **Production dependencies:** none proposed. React/Vite already cover the static experience; native HTML/CSS and existing icon tooling are sufficient.
- **Required dev dependency repair:** add `eslint-plugin-react` to match the existing ESLint configuration and restore linting.
- **Optional dev dependency:** `@playwright/test` only if approval includes compact browser smoke coverage. It is justified by this site's responsive, interactive, media-heavy behavior; no shallow unit-test framework is proposed.
- **Potential removals:** remove unused router/SWC/Font Awesome packages only after implementation and import audit prove they are unused. This reduces bundle/dependency surface without risking icon or route regressions.

## 17. Testing and validation plan

### Automated and build checks

Use a clean disposable clone/worktree for clean-install verification; do not delete user dependency or source artifacts to simulate it.

```powershell
yarn install --frozen-lockfile
yarn lint
yarn build
.\node_modules\.bin\tsc.cmd --noEmit
.\node_modules\.bin\vite.cmd preview --host 127.0.0.1 --port 4173
```

If this PowerShell environment still cannot resolve Yarn's local `.cmd` executables, use the direct fallback commands:

```powershell
.\node_modules\.bin\eslint.cmd . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
.\node_modules\.bin\tsc.cmd --noEmit
.\node_modules\.bin\vite.cmd build
```

### Browser and manual checks

- Preview the actual production output at `http://127.0.0.1:4173/`; assert no console errors, page errors, failed same-origin production assets, or horizontal overflow.
- Check 320×568, 390×844, 768×1024, 1440×900, and 1920×1080 layouts.
- Verify pointer and keyboard navigation, visible focus, skip link, headings, contact controls, project links, links to PDFs if surfaced, media availability, no hover-only essential behavior, and reduced-motion behavior.
- Verify `dist/CNAME` has exactly the confirmed canonical hostname; inspect `dist/index.html` and built asset URLs under root `base: "/"`.
- Verify exact `href` values for GitHub, LinkedIn, Google Docs résumé, email, URLgoat, and Spicy Bengal. External reachability is a manual/non-blocking smoke check because third parties can redirect or deny bots.
- Confirm video is keyboard-playable/pauseable and screenshot alt text is meaningful; inspect network/bundle size, especially the local video.
- Perform manual visual and browser accessibility inspection. Run Lighthouse against production preview and record performance/accessibility/best-practices/SEO findings; scores are advisory because local hardware, fonts, video decoding, and tool versions vary.

### Playwright recommendation

After explicit approval, add a concise `test:e2e` script and one Playwright smoke/accessibility spec rather than generic unit tests:

```powershell
yarn playwright install chromium
yarn test:e2e
```

The spec should run against `vite preview`, cover the viewport matrix, rendered destinations/assets, console errors, keyboard behavior, focus visibility, project media, reduced motion, and custom-domain root base behavior.

## 18. GitHub Pages build and deployment plan

1. Keep direct `gh-pages` publishing as the least-complex current mechanism; do not add a workflow unless the user later requests CI deployment.
2. During approved implementation, explicitly set Vite `base: "/"`, preserving imported asset URLs and the custom-domain root target.
3. Preserve generated `dist/CNAME`; first confirm the single canonical hostname. Prefer a single source of truth before changing the root `CNAME` or `predeploy` behavior.
4. Complete Section 17 validation and resolve all Blocking review findings.
5. Only after the user explicitly authorizes release, run `yarn deploy` from `portfolio-redesign` (which builds then publishes `dist` to `gh-pages`).
6. Live-smoke-test `https://goatmil.net`: root page, anchors, project/contact links, screenshot/video, responsive menu, keyboard navigation, console/network output, and canonical metadata.

No deployment, push, `gh-pages` modification, or remote action is authorized by this plan.

## 19. Risks and mitigations

| Risk                                                               | Mitigation                                                                                                                                |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Missing Spicy Bengal video despite stated preservation requirement | Obtain the media file or its repository path/URL before final acceptance; do not invent or silently omit it.                              |
| Two-line root CNAME vs one-line generated CNAME                    | Confirm canonical hostname and normalize only with user approval; keep current generated behavior untouched until then.                   |
| Broken lint configuration                                          | Add the missing dev dependency after approval, then run lint from a clean install.                                                        |
| Windows Yarn shim behavior                                         | Validate package scripts in a clean normal environment; retain direct local executable fallback for this environment.                     |
| Existing uncommitted `vite.config.ts` change                       | Preserve it and integrate `base` surgically; never reset/stash/overwrite it.                                                              |
| Large media/bundle                                                 | Avoid new production dependencies, lazy-load below-fold image, preload video metadata only, audit icon imports, and inspect build output. |
| Unsupported factual expansion                                      | Store only audited facts; mark all richer experience/project claims as confirmation-required.                                             |
| Static-host routing/base regression                                | Use a single page and imported assets, set explicit root base, preview built output, and test subpath only if hosting changes.            |

## 20. Explicit assumptions

- `goatmil.net` is intended as the canonical live domain because `predeploy` writes it and `homepage` names it.
- Existing contact and project destinations are retained unchanged unless a future check proves one invalid.
- The Google Docs link remains the canonical résumé destination until the user selects a local PDF instead.
- The current local repository is authoritative for available project media; therefore no Spicy Bengal video is assumed to exist locally.
- The site remains a simple static portfolio with no user-generated or remote content.

## 21. Resolved decisions and remaining future inputs

1. **Resolved:** URLgoat owns the local video; Spicy Bengal has a screenshot only.
2. **Resolved:** `goatmil.net` is canonical. `www.goatmil.net` is expected to redirect; `CNAME` contains only `goatmil.net`.
3. **Resolved:** the Google Docs résumé remains primary. The two unused local PDF files were authorized for deletion.
4. **Resolved scope:** user-confirmed skills include full-stack .NET development; Azure DevOps, Postman, Bruno, Angular, SQL Server, AI/agentic coding; and self-hosted Linux, Nginx, Docker, networking, Cloudflare/Access, Nextcloud, Raspberry Pi/Pi-hole/local DNS, Tailscale, and a custom WireGuard container. Mathematics and teaching remain foundations. No employers, dates, metrics, or outcomes are asserted.
5. **Resolved:** system typography is the selected performance-first direction.

## 22. Ordered implementation phases

1. **Preflight:** re-check branch/worktree, preserve pre-existing `vite.config.ts`, confirm open decisions, and create a focused implementation checklist.
2. **Foundation:** repair lint dependency/config, configure explicit Vite base and deployment-safe metadata/CNAME behavior only after canonical-domain confirmation.
3. **Information/data layer:** create typed static portfolio data from verified content; migrate no unverified claims.
4. **Layout and components:** build semantic shell, header/navigation, hero, about, skills, projects/media, contact, and footer; retire routing only once equivalent content exists.
5. **Responsive visual system:** apply tokens, layout rules, desktop/mobile navigation, accessible interaction states, and reduced-motion behavior.
6. **Media/SEO:** optimize URLgoat and Spicy Bengal presentation, add appropriate loading/control behavior, and implement static metadata/favicon/canonical strategy.
7. **Quality review:** run code-quality reviewer, resolve Blocking findings, then validate builds, assets, links, keyboard behavior, and visual responsive state.
8. **Release readiness:** run production preview and optional Playwright/Lighthouse checks; request explicit deployment authorization only after all acceptance checks pass.
9. **Deployment (separate authorized phase):** publish to `gh-pages` and complete live-domain smoke test.

## 23. Agent ownership for each phase

| Phase               | Owner                                                       | Supporting role                                                                      |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Planning/audit      | Parent orchestrator                                         | Repository Auditor, Design/UX, Testing/Validator, Release Manager                    |
| 1–6 implementation  | Frontend Implementer only                                   | Parent orchestrator coordinates; no parallel production-code editors                 |
| 7 quality review    | Code Reviewer (read-only)                                   | Frontend Implementer resolves approved issues                                        |
| 7–8 validation      | Testing/Validator (read-only strategy/review)               | Parent orchestrator runs agreed checks; Frontend Implementer fixes approved failures |
| 8 release readiness | Release Manager (read-only)                                 | Parent orchestrator verifies checklist                                               |
| 9 deployment        | Parent orchestrator only, after explicit user authorization | Release Manager supplies sequence                                                    |

Reusable agent definitions are located in `.codex/agents/`: `repository-auditor.toml`, `design-ux.toml`, `frontend-implementer.toml`, `code-reviewer.toml`, `testing-validator.toml`, and `release-manager.toml`. `.codex/config.toml` caps direct agent threads at three and depth at one; `AGENTS.md` records durable workflow and safety rules.

## 24. Dependencies between tasks

```text
User decisions (Spicy video, CNAME, résumé) ─┐
                                                ├─> foundation/data/content ─> components/styles ─> media/SEO
Audit + design plan ────────────────────────────┘                                      │
                                                                                review + validation
                                                                                       │
                                                                    explicit user deployment approval
                                                                                       │
                                                                                gh-pages publish + live smoke
```

The video, canonical domain, and résumé decisions are content/release gates, not reasons to fabricate placeholders. The visual shell can proceed after approval while unresolved media remains explicitly marked, but final acceptance cannot claim the missing video is preserved.

## 25. Definition of done

The redesign is complete only when it is implemented on `portfolio-redesign`, uses a maintainable React/Vite static architecture, preserves all confirmed content/assets/links, passes agreed build and browser validation, has no unresolved Blocking code-review findings, and has user authorization for any deployment. A live release is a separate final step, not implied by implementation completion.

## 26. Final acceptance checklist

- [ ] All redesign work is on `portfolio-redesign`.
- [ ] React and Vite remain in use; output is fully static.
- [ ] A clean install builds successfully and GitHub Pages compatibility is verified.
- [ ] Valid contact and project destinations remain exact.
- [ ] Important icons, URLgoat video, Spicy Bengal screenshot, and all confirmed Spicy Bengal video media remain available.
- [ ] No facts, metrics, employers, or project outcomes are fabricated.
- [ ] Layout works at mobile, tablet, laptop, and large-desktop viewports.
- [ ] Navigation is keyboard accessible; focus states are visible; heading hierarchy and landmarks are logical.
- [ ] Images have appropriate alternative text; video is accessible without hover.
- [ ] Reduced-motion preferences are respected.
- [ ] Production preview has no expected console errors or missing production assets.
- [ ] Direct asset paths work at the GitHub Pages/custom-domain base URL.
- [ ] Lint, type check, build, and agreed browser checks pass.
- [ ] Blocking reviewer findings are resolved before release.
- [ ] CNAME/canonical-domain decision is confirmed and deployed output is verified.
- [ ] No deployment occurs without explicit user authorization.
