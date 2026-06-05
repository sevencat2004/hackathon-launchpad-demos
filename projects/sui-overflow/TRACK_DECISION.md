# Sui Overflow track decision

Status: DeepSurge project page created and visible, not approved, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.

## Decision

Target track: `Agentic Web`

Secondary fit: `DeFi & Payments`

## Official source snapshot

- Sui Overflow site: `https://overflow.sui.io/`
- Sui Overflow 2026 handbook: `https://overflow.sui.io/handbook`
- Official timeline checked on 2026-06-05: Sui Overflow 2026 runs from May through August, with hackathon submissions due on June 21 before judging and finalists.
- Official handbook track list checked on 2026-06-05: core tracks include Agentic Web, Consumer, DeFi & Payments, Infrastructure & Tooling, and Move; specialized tracks include Walrus, DeepBook, SuiNS, DoubleUp, LoFi, Onchain Gaming, and Enoki.
- Official registration/submission entry checked on 2026-06-05: the public Sui Overflow page routes users through a DeepSurge profile flow.

## Why Agentic Web

Sui GrantFlow Agent is already framed as an agent-style planning and handoff tool. It helps a builder turn a project idea into milestones, acceptance criteria, and safe wallet handoff text. That is closer to an agentic product workflow than to a pure Move package or DeFi protocol.

## Why DeFi & Payments remains secondary

The product touches payment handoff and public wallet addresses, and the MVP now includes `@mysten/sui` address validation plus a dry-run SUI payment intent. It still does not move funds, create escrow, sign transactions, or broadcast anything. Calling it DeFi first would overstate the build, so DeFi & Payments remains a secondary angle.

## Next technical slice

1. Keep the public MVP as an Agentic Web prototype.
2. Use the Sui SDK adapter as concrete proof that the wallet handoff is Sui-aware.
3. Add a small Move package only if a track requirement makes it necessary.
4. Never request, paste, or store a private key, seed phrase, recovery phrase, or wallet secret.

## User-owned requirements

- If Sui proceeds to final submission, user provides only a public Sui wallet address.
- User handles final Sui Overflow submission, identity/KYC/tax/payment onboarding, and wallet custody.
