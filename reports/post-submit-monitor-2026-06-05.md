# Post-submit monitor - 2026-06-05

Status: monitor snapshot, not an approval notice.
Price: H0 80,000 USD cash; UiPath 50,000 USD cash; Sui Overflow 500,000+ USD track prizes / 1,000,000+ USD total prizes and seed funding; Splunk 20,000 USD total cash and feedback awards.

Checked: 2026-06-05 Asia/Shanghai.

## Current state

| Project | Public / submission state | Payment state | Next action |
| --- | --- | --- | --- |
| ClaimDesk Agent | Submitted to UiPath AgentHack and public demo is live | not approved, not paid | monitor Devpost/email |
| Runbook Relay Agent | Submitted to Splunk Agentic Ops Hackathon and public demo is live | not approved, not paid | monitor Devpost/email |
| Sui GrantFlow Agent | DeepSurge project page created and public demo is live | not approved, not paid | monitor DeepSurge/email |
| Zero Stack BountyOps | Public demo is live; H0 credits requested; final submission blocked by AWS evidence | not approved, not paid | wait for AWS/v0 credits and AWS database evidence |

## Evidence

- GitHub remote `main`: `1196d6d83286d9c556043e6279c234e39b000294`.
- Latest launchpad commit: `1196d6d Align launchpad public status copy`.
- Public GitHub repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`.
- Public Vercel hub: `https://hackathon-launchpad-demos.vercel.app/`.
- Public pages checked through local proxy `http://127.0.0.1:10809`:
  - `/` shows `Four contest projects, one deployable demo hub`.
  - `/h0/` shows H0 as not submitted/not paid and parallel status as `Credits requested`, `Submitted`, `Submitted`, `Page created`.
  - `/splunk/` shows `submitted`.
  - `/sui/` shows `Project page created` and `Not approved, not paid`.
- Sui video URL `https://youtu.be/lgvusO6ePO4` resolves as `Sui GrantFlow Agent Demo`.

## Decision

No code or submission change is needed right now. The four-project set is in monitor/wait mode:

1. UiPath and Splunk wait for Devpost or organizer review.
2. Sui waits for DeepSurge or Sui Overflow review/status.
3. H0 waits for AWS/v0 credits and real AWS database evidence before final Devpost submission.

## User-owned boundaries

The user must personally handle any account, wallet, tax, KYC, payment, AWS billing, AWS credentials, or one-time-code steps. Do not share private keys, seed phrases, recovery phrases, tax IDs, bank details, AWS secrets, billing details, or verification codes in chat.
