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
| Zero Stack BountyOps | AWS DynamoDB verified; final Devpost review pending | not submitted, not approved, not paid | stop on final Devpost review page and send screenshots |

## H0 credit evidence

- User forwarded the H0 organizer approval email on 2026-06-06.
- Email says AWS promotional credits worth 100 USD were approved.
- Email says v0 credits worth 30 USD were approved.
- AWS credits expire December 31, 2026 and should be redeemed by July 31, 2026.
- v0 credits must be redeemed by July 13, 2026 and expire 6 weeks after redemption.
- The redemption codes are intentionally not recorded in this repo.

## Decision

H0 moved from `credits requested` to `credits approved`, then to `AWS DynamoDB verified`.

H0 is technically ready for final Devpost page preparation. Verified evidence:

1. AWS credits granted and v0 credits redeemed.
2. Real DynamoDB table `h0_reports` created.
3. Vercel environment variables added with secret values hidden.
4. Production redeployed.
5. Public H0 page saved a report to DynamoDB table `h0_reports`.
6. Live API verification through proxy returned `stored=true`, backend `dynamodb`, table `h0_reports`, region `us-east-1`, reportId `7e953ed8-e8c6-4f94-8350-0759a2cc5345`.
7. Remaining step: final Devpost page review before user final-submits.

## User-owned boundaries

The user must personally handle AWS account creation, AWS/v0 credit redemption, billing, tax, KYC, payment, and one-time-code steps. Do not share or store redemption codes, AWS root credentials, AWS access keys, AWS secret keys, billing details, bank details, tax IDs, private keys, seed phrases, or verification codes in chat or repo files.
