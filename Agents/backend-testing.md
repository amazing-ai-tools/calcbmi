# Backend Testing — calcbmi

No backend exists today. Do not invent backend tests for the static calculator.

## If A Backend Is Added
- Add API contract tests for every endpoint.
- Test auth/authz before storing any user health data.
- Use explicit test databases and never production credentials.
- Add validation tests for numeric inputs and unit payloads.
- Add privacy-focused tests for data deletion/export if accounts or history exist.

## Current Guidance
For the present static app, backend-testing work should redirect to frontend/unit coverage for BMI formula correctness and to deploy verification through `npm run build`.
