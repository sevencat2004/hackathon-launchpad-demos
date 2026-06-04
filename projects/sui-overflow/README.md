# Sui GrantFlow Agent

Status: MVP draft, not submitted, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.

Sui GrantFlow Agent is a milestone and wallet-safety assistant for turning a Sui bounty,
grant, or hackathon project into reviewable deliverables and safe payment handoff text.

## Current MVP

- milestone planner
- acceptance criteria
- public-address-only wallet handoff
- `@mysten/sui` address validation in the CLI demo
- dry-run SUI payment intent model
- reviewer packet generation
- copy action

## Run

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:sui
```

From this project directory, the Sui-specific CLI proof can also be run with:

```powershell
npm.cmd run demo
npm.cmd run intent
```

The `intent` command uses public address validation only. It does not ask for a private key,
seed phrase, recovery phrase, signature, or live transaction.

## Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:sui
```

The deployable static bundle is written to `D:\coin\hackathon-launchpad\dist\sui`.
