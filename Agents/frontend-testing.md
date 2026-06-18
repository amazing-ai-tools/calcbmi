# Frontend Testing — calcbmi

## Current Test Stack
- No dedicated frontend test runner is configured yet.
- Current release gate: `npm run build`.

## Recommended Next Layer
- Vitest for pure BMI calculation functions.
- React Testing Library for form validation and result rendering.
- Playwright for end-to-end calculator smoke tests across mobile and desktop.

## Critical Cases
- Metric calculation: kilograms and centimeters/meters.
- Imperial calculation: pounds, feet, inches.
- Rounding behavior and category boundaries.
- Empty, non-numeric, zero, negative, and extreme values.
- Unit switching.
- BugZero widget script is not injected twice.

## Before Completion
- Run `npm run build`.
- If test tooling exists, run the relevant unit and browser tests.
