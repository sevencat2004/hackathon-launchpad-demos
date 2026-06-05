# MVP Plan

Status: credits requested; draft-only until AWS database evidence exists, not approved, not paid.
Price: 80,000 USD cash prize pool.

## MVP Slice

Build a web app with three flows:

1. Analyze an opportunity URL.
2. Generate a ranked pursuit plan.
3. Export a Devpost-ready demo packet.

## Data Model

- Opportunity: url, platform, title, amount, deadline, rules.
- Score: collectability, autonomy, competition, time risk, account risk.
- Artifact: README copy, demo script, user checklist, submission checklist.

## Technical Shape

- Frontend: Vercel app.
- Backend: server actions or API routes.
- Cloud functions: opportunity analysis and report generation.
- Optional AWS piece: Lambda/WebSocket/AppSync integration if the rules require or reward it.

## First Code Tasks

- Create web dashboard skeleton. Done in `public/index.html`.
- Add deterministic scoring engine.
- Add sample opportunity fixtures from H0, UiPath, Sui, Splunk, Goose, Stellar.
- Add exportable Markdown report.
