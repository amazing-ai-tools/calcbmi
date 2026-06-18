# Security Audit — calcbmi

## Current Surface
- Public static React bundle.
- BugZero widget loaded from a configured script URL.
- GitHub Actions secrets and repository variables.
- No backend, auth, database, or server-side health data storage.

## Audit Focus
- No private tokens in `VITE_*` variables.
- BugZero widget injection remains guarded against duplicate scripts.
- Third-party URLs are intentional and trusted.
- Dependencies are maintained and free of known severe CVEs.
- Future health-related data is not sent to servers without explicit consent and product need.
- Workflow secrets are scoped to deploy only.

## Severity Guidance
- Block leaked secrets, unsafe script injection, or unexpected network transmission of health data.
- Discuss ambiguous health wording that could be interpreted as medical advice.
- Nit cosmetic issues only after correctness and privacy are handled.
