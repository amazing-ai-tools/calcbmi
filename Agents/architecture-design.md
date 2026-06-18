# Architecture Design — calcbmi

## Current Architecture
- Static React/Vite SPA
- Single entrypoint at `src/main.tsx`
- Styling in `src/styles.css`
- BugZero widget injected client-side when `VITE_BUGZERO_APP_KEY` exists
- GitHub Actions deploys `dist`
- No backend, database, auth, or API

## Architecture Defaults
- Keep BMI calculation local in the browser.
- Use pure functions for formula, unit conversion, rounding, and category mapping.
- Keep health data off servers unless a future feature explicitly requires storage and privacy review.
- Add backend services only for durable product needs: saved history, accounts, CMS content, analytics with consent, or integrations.
- Avoid introducing global state libraries until the UI has enough shared state to justify them.

## Decision Questions
- Can this be a pure client-side feature?
- Does the user need persistence, or is local interaction enough?
- Is the health wording informational and caveated?
- Can `npm run build` remain the release gate after the change?
