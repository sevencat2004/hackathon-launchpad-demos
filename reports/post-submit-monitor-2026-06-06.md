# Post-submit monitor - 2026-06-06

Status: H0 credit approval snapshot, not a project approval notice.
Price: H0 80,000 USD cash; UiPath 50,000 USD cash; Sui Overflow 500,000+ USD track prizes / 1,000,000+ USD total prizes and seed funding; Splunk 20,000 USD total cash and feedback awards.

Checked: 2026-06-06 Asia/Shanghai.

## Current state

| Project | Public / submission state | Payment state | Next action |
| --- | --- | --- | --- |
| ClaimDesk Agent | Submitted to UiPath AgentHack and public demo is live | not approved, not paid | monitor Devpost/email |
| Runbook Relay Agent | Submitted to Splunk Agentic Ops Hackathon and public demo is live | not approved, not paid | monitor Devpost/email |
| Sui GrantFlow Agent | DeepSurge project page created and public demo is live | not approved, not paid | monitor DeepSurge/email |
| Zero Stack BountyOps | H0 AWS/v0 credits approved by email; redemption and AWS database evidence still pending | not submitted, not approved, not paid | user redeems credits, then Codex guides DynamoDB/Vercel/evidence |

## H0 credit evidence

- User forwarded the H0 organizer approval email on 2026-06-06.
- Email says AWS promotional credits worth 100 USD were approved.
- Email says v0 credits worth 30 USD were approved.
- AWS credits expire December 31, 2026 and should be redeemed by July 31, 2026.
- v0 credits must be redeemed by July 13, 2026 and expire 6 weeks after redemption.
- The redemption codes are intentionally not recorded in this repo.

## Decision

H0 moved from `credits requested` to `credits approved, pending user redemption`.

H0 is still not final-submittable. Required next evidence:

1. AWS credit redemption/account readiness screenshot with redemption code hidden.
2. v0 credit redemption screenshot with redemption code hidden.
3. Real AWS database setup, recommended DynamoDB table `h0_reports`.
4. Vercel environment variables with secret values hidden.
5. Redeployed public H0 page using real AWS database evidence.
6. Final Devpost page review before user final-submits.

## User-owned boundaries

The user must personally handle AWS account creation, AWS/v0 credit redemption, billing, tax, KYC, payment, and one-time-code steps. Do not share or store redemption codes, AWS root credentials, AWS access keys, AWS secret keys, billing details, bank details, tax IDs, private keys, seed phrases, or verification codes in chat or repo files.
