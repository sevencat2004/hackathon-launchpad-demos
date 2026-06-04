# Four Project Submission QA

Status: operating QA snapshot.
Price: H0 80,000 USD cash; UiPath 50,000 USD cash; Sui Overflow 500,000+ USD track prizes / 1,000,000+ USD total prizes and seed funding; Splunk 20,000 USD total cash and feedback awards.

Checked: 2026-06-05 Asia/Shanghai.

## Executive state

| Project | Current state | Payment state | User action now |
| --- | --- | --- | --- |
| ClaimDesk Agent | Submitted to UiPath AgentHack | not approved, not paid | watch email |
| Runbook Relay Agent | Submitted to Splunk Agentic Ops Hackathon | not approved, not paid | watch email |
| Sui GrantFlow Agent | Built, upgraded, video ready, packet ready, not submitted | not approved, not paid | open official submission and provide public Sui address if asked |
| Zero Stack BountyOps | Built as draft; final blocked by no AWS account | not approved, not paid | no action unless AWS account/credits become available |

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
- Optional DynamoDB-compatible API scaffold: `projects/h0-zero-stack/api/h0-reports.js`.

QA result:

- Draft materials are strong enough for internal prep.
- Final submission is not ready because the user confirmed no AWS account.
- H0 requires real AWS database evidence for a proper final submission.

Remaining user-owned actions:

- Only proceed if user creates or receives access to a safe AWS account/credits path.
- User must handle AWS account, billing, identity, and any tax/payment requirements.

Do not claim:

- Do not claim an active AWS backend.
- Do not claim DynamoDB/Aurora evidence until real screenshots/configuration exist.

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
2. Sui is now the next feasible submission; video is ready, and the remaining user-owned step is the official submission/account flow plus public wallet address if asked.
3. H0 stays draft-only until AWS is solved.
