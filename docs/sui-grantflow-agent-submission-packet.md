# Sui GrantFlow Agent Submission Packet

Status: DeepSurge project page created and visible, not approved, not paid.
Price: Sui Overflow 2026 has 500,000+ USD in track prizes and 1,000,000+ USD in total prizes and seed funding; actual award is track-dependent.

## Official source snapshot

- Sui Overflow 2026 site: `https://overflow.sui.io/`
- Participant handbook: `https://mystenlabs.notion.site/overflow-2026-handbook`
- Checked on 2026-06-05.
- Official track rule: choose the one track that best represents the project.
- Selected track: `Agentic Web`.
- Timeline from handbook: building period May 7 to June 21, 2026; submission deadline June 21, 2026; shortlisted teams announced July 8, 2026; demo days July 20-21, 2026; winners announced August 27, 2026.
- Submission entry note: official Sui Overflow materials route registration/submission through a DeepSurge profile flow from `https://overflow.sui.io/`.
- Prize payment note from handbook: 50% of a prize is awarded when winners are announced, and 50% after successful mainnet deployment. If a winning project is already on mainnet by the winners announcement, it may receive 100% upfront.

## Links

Project name:

```text
Sui GrantFlow Agent
```

Public demo:

```text
https://hackathon-launchpad-demos.vercel.app/sui/
```

Public repository:

```text
https://github.com/sevencat2004/hackathon-launchpad-demos
```

Local demo video:

```text
D:\coin\hackathon-launchpad\outputs\sui-grantflow-agent-demo.mp4
```

Recommended video title:

```text
Sui GrantFlow Agent Demo
```

Public demo video:

```text
https://youtu.be/lgvusO6ePO4
```

## Short description

```text
A milestone and wallet-safe handoff assistant for Sui builders preparing grants, bounties, and hackathon submissions.
```

## One-line pitch

```text
Sui GrantFlow Agent turns a project idea into reviewable milestones, public-address-only payment handoffs, and a dry-run SUI intent without asking for wallet secrets.
```

## Project story

### Inspiration

I built Sui GrantFlow Agent around a problem I keep running into as a builder: funding work is not just about the code. A good project still needs milestones, review terms, wallet details, and a clean handoff between the person building and the person approving the work.

In Web3, that handoff can get risky quickly if the tool asks for the wrong thing. I wanted the safe boundary to be obvious from the first screen: public address only, never private keys or recovery phrases.

### What it does

Sui GrantFlow Agent helps a builder turn a project idea into a reviewer-ready packet. It creates milestone deliverables, acceptance criteria, wallet-safe payment notes, and a dry-run SUI payment intent.

The prototype validates the shape of a public Sui address, shows a testnet-ready payment intent model, and keeps the reviewer packet plain enough for a judge or grant reviewer to scan.

### How we built it

The public demo is a static browser app hosted through the shared launchpad site. The Sui-specific proof lives in the `projects/sui-overflow` workspace. The CLI uses `@mysten/sui` for public address validation and builds a dry-run payment intent object.

The demo does not sign or broadcast transactions. That is intentional for this stage. It proves the handoff model while keeping wallet custody with the user.

### What makes it Sui-specific

- It uses `@mysten/sui` for address validation in the CLI proof.
- It models SUI amounts in MIST and SUI.
- It keeps the project focused on Agentic Web: an agentic workflow that prepares milestones, handoff steps, and reviewer packets.
- It leaves room for a later wallet adapter or Move package without pretending the prototype already moves funds on mainnet.

### Challenges

The biggest design choice was restraint. It would be easy to make the demo look more impressive by asking for wallet access or pretending to complete a live payment. I kept the first version narrower because a hackathon reviewer should be able to trust the safety boundary.

### What we learned

Good builder tools should separate project planning from account custody. A public address belongs in a submission packet. A private key does not. That sounds simple, but making the product enforce that boundary changes the whole feel of the workflow.

### What is next

Next I would connect the handoff to a Sui wallet adapter, add a Move package for milestone receipts, and let teams export signed milestone approvals after they choose to connect a wallet. I would also add mainnet deployment evidence if the project advances after the hackathon.

## Technical notes

```text
Frontend: HTML, CSS, JavaScript
CLI proof: Node.js, @mysten/sui
Sui behavior: public address validation, MIST/SUI amount model, dry-run payment intent
Safety: no private keys, no seed phrases, no recovery phrases, no signing, no live transaction broadcast
```

## Track answer

```text
Agentic Web
```

Reason:

```text
The core product is an autonomous workflow assistant for Sui builders. It prepares milestones, payment handoff text, and reviewer packets while using Sui-aware address validation. The payment feature supports the workflow, but the project is not a live DeFi product yet.
```

## Contribution answer

```text
I designed and built the prototype end to end: the browser demo, milestone model, wallet-safety flow, Sui address validation proof, dry-run payment intent, reviewer packet output, documentation, screenshots, and demo video.
```

## Wallet answer

Use only a public Sui address when the official form asks for one.

Never paste:

- private key
- seed phrase
- recovery phrase
- one-time code
- exchange login
- tax ID or bank details in chat

## Submission status

This packet is ready for user-owned Sui Overflow submission steps.

Remaining user-owned items:

- use the uploaded Sui video URL `https://youtu.be/lgvusO6ePO4`
- provide only a public Sui wallet address if the form asks for one
- complete official account, identity, tax, KYC, and payment steps on official sites only
