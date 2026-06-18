# Deploying — calcbmi

## Deployment Stack
- GitHub Actions: `.github/workflows/deploy.yml`
- Build: Node 22, `npm ci --include=dev`, `npm run build`
- Output: `dist`
- Default host: Azure Static Web Apps
- Optional host: Cloudflare Pages

## Required Configuration
- Repository variables: `APP_DISPLAY_NAME`, `APP_DOMAIN`, `BUGZERO_APP_KEY`, `BUGZERO_WIDGET_URL`, `RUNNER_LABEL`
- Azure secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- Cloudflare variables/secrets when selected: `HOSTING_PROVIDER`, `CLOUDFLARE_PROJECT_NAME`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`

## Runner
The planned self-hosted runner label is `vps-calcbmi`. Registration requires a GitHub PAT with `repo` scope and was intentionally skipped during initial provisioning.

## Release Gate
Run `npm run build` locally before pushing implementation changes.
