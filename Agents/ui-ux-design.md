# UI/UX Design — calcbmi

## Product Goal
Make BMI calculation quick, readable, and responsible. The user should know what to enter, see the result immediately, and understand that BMI is a broad screening metric rather than a diagnosis.

## Design Rules
- Mobile-first, with stable form controls and no layout jump on result updates.
- Support metric and imperial units clearly.
- Use labels, helper text, validation messages, and visible focus states.
- Keep result hierarchy simple: BMI number, category, explanation, caveat.
- Avoid medical alarmism and avoid pretending to assess individual health risk.
- Keep calls to action practical: recalculate, switch units, learn limitations.

## Current Files
- `src/main.tsx`
- `src/styles.css`
- `index.html`

## Verification
- Check mobile and desktop layouts.
- Confirm long validation messages fit in their containers.
- Confirm keyboard-only use works from input through result.
