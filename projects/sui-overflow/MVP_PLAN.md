# MVP Plan

Status: first-stage started, not submitted, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; actual award depends on track and judging.

## MVP Slice

Build a prototype that:

1. Defines bounty/grant milestones.
2. Generates Sui-safe wallet action checklists.
3. Shows a simulated escrow or payment-intent flow.
4. Exports a reviewer packet.

## Selected Track

Target `Agentic Web` first. The product is an agent-style planning and handoff assistant. `DeFi & Payments` stays secondary unless we add live Sui SDK or Move payment/escrow behavior.

## Technical Shape

- Web dashboard first.
- Sui SDK integration after wallet/account setup and submission value are clear.
- No private key handling in the project workspace.
- Optional Move package only if needed for the selected track.

## First Code Tasks

- Draft track fit and Sui account requirements.
- Build simulated milestone/payment model.
- Add wallet safety copy.
- Decide whether to implement Move contract or stay at app/tool layer.
