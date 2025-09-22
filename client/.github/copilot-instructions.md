# Copilot Instructions for kindheart React/Vite Project

## Project Overview
- **Framework:** React 18 with Vite for fast development and HMR.
- **Styling:** Tailwind CSS (see `tailwind.config.js`, `postcss.config.js`).
- **Linting:** ESLint with custom config (`eslint.config.js`).
- **Component Structure:** All UI logic is in `src/components/` with subfolders for feature areas (e.g., `Navbar`, `Blogs`, `Banner`).
- **Assets:** Images and static files are in `src/assets/` and `public/`.

## Key Workflows
- **Development:**
  - Start dev server: `npm run dev` (from `client/`)
  - Build for production: `npm run build`
  - Preview production build: `npm run preview`
- **Linting:**
  - Run linter: `npm run lint`
- **Styling:**
  - Tailwind is used for all styling. Avoid inline styles and prefer utility classes.

## Patterns & Conventions
- **Component Organization:**
  - Use folder-per-feature (e.g., `Navbar/`, `Blogs/`).
  - Subcomponents are nested (e.g., `Navbar/Banner/Banner.jsx`).
  - Prefer functional components and hooks.
- **File Naming:**
  - Components: `PascalCase.jsx`
  - Styles: Use Tailwind classes in JSX, not separate CSS files.
- **Assets:**
  - Import images from `src/assets/` for use in components.
  - Use `public/` for static files referenced in `index.html`.
- **Routing:**
  - No routing setup by default. If adding, use React Router and place config in `src/`.

## External Integrations
- **Vite Plugins:** See `vite.config.js` for plugin usage.
- **No backend/API integration** is present by default. Add API logic in a new `services/` folder if needed.

## Examples
- To add a new feature, create a folder in `src/components/` and follow the existing structure.
- To update the Navbar, edit files in `src/components/Navbar/`.

## References
- See `README.md` for Vite/React basics.
- See `tailwind.config.js` for custom Tailwind setup.
- See `vite.config.js` for build and plugin config.

---
**AI agents:** Follow these conventions for consistency. If unsure, reference similar files or ask for clarification.
