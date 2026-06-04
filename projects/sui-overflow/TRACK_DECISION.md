# Sui Overflow track decision

Status: track selected for next build slice, not submitted, not approved, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.

## Decision

Target track: `Agentic Web`

Secondary fit: `DeFi & Payments`

## Official source snapshot

- Sui Overflow site: `https://overflow.sui.io/`
- Sui Overflow 2026 handbook: `https://overflow.sui.io/handbook`
- Official timeline checked on 2026-06-04: Sui Overflow 2026 runs from May through August, with hackathon submissions due before judging and finalists.
- Official handbook track list checked on 2026-06-04: core tracks include Agentic Web, Consumer, DeFi & Payments, Infrastructure & Tooling, and Move; specialized tracks include Walrus, DeepBook, SuiNS, DoubleUp, LoFi, Onchain Gaming, and Enoki.

## Why Agentic Web

Sui GrantFlow Agent is already framed as an agent-style planning and handoff tool. It helps a builder turn a project idea into milestones, acceptance criteria, and safe wallet handoff text. That is closer to an agentic product workflow than to a pure Move package or DeFi protocol.

## Why DeFi & Payments remains secondary

The product touches payment handoff and public wallet addresses, but the current MVP does not move funds, create escrow, or integrate live Sui transactions. Calling it DeFi first would overstate the build. DeFi & Payments should remain a secondary angle only if we add Sui SDK or Move code later.

## Next technical slice

1. Keep the public MVP as an Agentic Web prototype.
2. Add a Sui SDK adapter only if the submission form rewards concrete Sui integration.
3. Add a small Move package only if a track requirement makes it necessary.
4. Never request, paste, or store a private key, seed phrase, recovery phrase, or wallet secret.

## User-owned requirements

- If Sui proceeds to final submission, user provides only a public Sui wallet address.
- User handles final Sui Overflow submission, identity/KYC/tax/payment onboarding, and wallet custody.
