# Four Project Submission QA

Status: operating QA snapshot.
Price: H0 80,000 USD cash; UiPath 50,000 USD cash; Sui Overflow 500,000+ USD track prizes / 1,000,000+ USD total prizes and seed funding; Splunk 20,000 USD total cash and feedback awards.

Checked: 2026-06-06 Asia/Shanghai.

## Executive state

| Project | Current state | Payment state | User action now |
| --- | --- | --- | --- |
| ClaimDesk Agent | Submitted to UiPath AgentHack | not approved, not paid | watch email |
| Runbook Relay Agent | Submitted to Splunk Agentic Ops Hackathon | not approved, not paid | watch email |
| Sui GrantFlow Agent | DeepSurge project page created and visible; official review/status still needs monitoring | not approved, not paid | watch DeepSurge/email for status or warnings; provide public Sui address only if officially requested |
| Zero Stack BountyOps | AWS DynamoDB verified; final Devpost review pending | not submitted, not approved, not paid | stop on final Devpost review page and send screenshots |

## UiPath AgentHack - ClaimDesk Agent

Evidence:

- User provided Devpost confirmation email titled `Submission confirmed: ClaimDesk Agent`.
- Demo video URL used: `https://youtu.be/gHQgj7wIUnY`.
- Public demo: `https://hackathon-launchpad-demos.vercel.app/uipath/`.
- Public repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`.

QA result:

- Submission state is confirmed.
- Do not resubmit.
- Keep YouTube, Vercel, and GitHub public/reachable.

Next action:

- Monitor email and Devpost for reviewer requests.

## Splunk Agentic Ops - Runbook Relay Agent

Evidence:

- User provided Devpost public page showing `Project submitted!`.
- User provided Devpost confirmation email titled `Submission confirmed: Runbook Relay Agent`.
- Demo video URL used: `https://youtu.be/gHQgj7wlUnY`.
- Public demo: `https://hackathon-launchpad-demos.vercel.app/splunk/`.
- Public repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`.

QA result:

- Submission state is confirmed.
- Do not resubmit.
- Keep YouTube, Vercel, and GitHub public/reachable.

Next action:

- Monitor email and Devpost for reviewer requests.

## Sui Overflow 2026 - Sui GrantFlow Agent

Evidence:

- Public demo: `https://hackathon-launchpad-demos.vercel.app/sui/`.
- Public repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`.
- English submission packet: `docs/sui-grantflow-agent-submission-packet.md`.
- Chinese user checklist: `projects/sui-overflow/USER_SUBMISSION_CHECKLIST.zh-CN.md`.
- Final field review packet: `projects/sui-overflow/FINAL_FIELD_REVIEW.zh-CN.md`.
- Local video: `D:\coin\hackathon-launchpad\outputs\sui-grantflow-agent-demo.mp4`.
- YouTube video: `https://youtu.be/lgvusO6ePO4`.
- CLI proof: `npm.cmd run intent 0x1111111111111111111111111111111111111111111111111111111111111111`.

QA result:

- The project is no longer just a generic planning demo.
- It now includes `@mysten/sui` public-address validation and a dry-run SUI payment intent.
- Selected track remains `Agentic Web`, with payment handoff as a supporting feature.
- Safety boundary is clear: no private key, seed phrase, recovery phrase, signing, or live transaction broadcast.

Remaining user-owned actions:

- Use the uploaded YouTube video URL if official submission asks for a video URL.
- Provide only a public Sui address if the official form asks for a wallet.
- Stop on the final review/submit screen and send screenshots for field-by-field review.
- Complete official account, identity, tax, KYC, and payment steps.

Do not claim:

- Do not claim mainnet deployment unless it is actually added and verified.
- Do not claim live payments or escrow.

## H0 - Zero Stack BountyOps

Evidence:

- Public demo: `https://hackathon-launchpad-demos.vercel.app/h0/`.
- Public repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`.
- Local video: `D:\coin\hackathon-launchpad\outputs\h0-zero-stack-bountyops-demo.mp4`.
- AWS compliance plan: `projects/h0-zero-stack/AWS_COMPLIANCE_PLAN.md`.
- Verified DynamoDB API route: `projects/h0-zero-stack/api/h0-reports.js`.
- User screenshot shows public H0 page saved to DynamoDB table `h0_reports`.

QA result:

- AWS database requirement is now met with DynamoDB table `h0_reports`.
- Public H0 save flow is verified against DynamoDB.
- Final submission is waiting for Devpost page review and user-owned final submit.

Remaining user-owned actions:

- Stop on the final H0 Devpost review page and send screenshots.
- User must handle AWS account, billing, identity, and any tax/payment requirements.

Do not claim:

- Do not expose AWS access keys, secret keys, billing details, or verification codes.
- Do not final-submit until the project lead reviews the final Devpost page.

## Verification commands

Run from `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd test
npm.cmd run build:sui
npm.cmd run screenshots
```

Run from `D:\coin\hackathon-launchpad\projects\sui-overflow`:

```powershell
npm.cmd run demo
npm.cmd run intent 0x1111111111111111111111111111111111111111111111111111111111111111
```

## Current operating decision

1. UiPath and Splunk are submitted. Wait and monitor.
2. Sui has a visible DeepSurge project page; monitor official status, warning banners, and email. Provide only a public Sui address if the official flow later asks for one.
3. H0 moves to final Devpost page review; do not submit until screenshots are checked.
