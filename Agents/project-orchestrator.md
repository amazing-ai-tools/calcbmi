# Project Orchestrator — calcbmi

Coordinate calcbmi work across the project-local skills and the LOTR squad.

## Default Routing
- Product direction and scope: `Agents/project-manager.md`
- UI implementation: `Agents/coding.md` + `Agents/ui-ux-design.md`
- Formula and form verification: `Agents/frontend-testing.md`
- Deploy or CI failures: `Agents/deploying.md`
- Secrets, health data, and third-party scripts: `Agents/security-audit.md`
- Backend proposals: `Agents/architecture-design.md` first, then `Agents/backend-testing.md` only if a backend exists

## Operating Rules
- Start from the current code, not from assumptions.
- Keep the app static until there is a real server-side requirement.
- Protect deployability.
- Make health claims conservative and caveated.
