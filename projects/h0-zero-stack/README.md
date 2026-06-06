# Zero Stack BountyOps

Status: AWS DynamoDB verified; final Devpost review pending, not submitted, not approved, not paid.
Price: 80,000 USD cash prize pool.

Zero Stack BountyOps is an agentic operations dashboard for deciding whether a hackathon,
bounty, or grant opportunity is worth pursuing.

## Current MVP

- opportunity URL, prize, and deadline input
- scoring controls for theme fit, autonomy, collectability, time risk, and account risk
- dynamic score and recommendation
- risk reason generation
- packet generation
- copy action
- local saved reports
- verified DynamoDB-backed saved reports through `/api/h0-reports`
- Markdown packet download

## AWS-backed Save Path

The H0 final submission needs an AWS database primary backend. This project includes
a Vercel Serverless Function at `api/h0-reports.js` that writes saved reports to the
verified DynamoDB table `h0_reports` when the required environment variables are present.

Required Vercel Environment Variables:

- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `H0_REPORTS_TABLE`

Optional:

- `AWS_SESSION_TOKEN`

The browser never receives AWS credentials. If the API is not configured yet, the app keeps
using local draft storage and shows a clear status message.

Final H0 submission remains pending until the final Devpost page is reviewed and the user
submits from the user-owned Devpost account.

Submission support:

- `D:\coin\hackathon-launchpad\projects\h0-zero-stack\AWS_COMPLIANCE_PLAN.md`
- `D:\coin\hackathon-launchpad\projects\h0-zero-stack\AWS_USER_HANDOFF.zh-CN.md`
- `D:\coin\hackathon-launchpad\docs\h0-aws-evidence-template.md`

## Run

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:h0
```

## Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:h0
```

The deployable bundle is written to `D:\coin\hackathon-launchpad\dist\h0`.
