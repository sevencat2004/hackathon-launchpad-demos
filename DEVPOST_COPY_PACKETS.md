# Devpost Copy Packets

Status: draft assets, not submitted, not paid.
Price: mixed; H0 80,000 USD cash, UiPath 50,000 USD cash, Sui Overflow 500,000+ USD total prize pool / track-dependent, Splunk 20,000 USD total cash and feedback awards.

## H0: Zero Stack BountyOps

### Tagline

An agentic operations dashboard that turns hackathon, bounty, and grant links into ranked pursuit plans and submission-ready packets.

### What It Does

Zero Stack BountyOps helps builders decide what to pursue before they spend engineering time. It scores an opportunity by theme fit, Codex autonomy, collectability, time risk, and account risk, then generates risk reasons and a reusable handoff packet.

### Inspiration

Large prizes and bounty labels can hide low payout probability, crowded competition, and account/KYC friction. This project makes the decision process visible and auditable before a team starts building.

### How We Built It

The current MVP is a static web app with opportunity input, adjustable scoring controls, dynamic recommendations, saved reports, Markdown packet download, and static deployment output.

### Challenges

The main challenge was turning a subjective go/no-go decision into a transparent model without overclaiming payout certainty.

### Accomplishments

- Built a display-ready dashboard.
- Added dynamic scoring and risk reasons.
- Added local saved reports and Markdown export.
- Generated a static deployment bundle.

### What's Next

Deploy publicly, add live opportunity fetchers, add richer report history, and connect the scoring engine to the other hackathon tracks.

## UiPath AgentHack: ClaimDesk Agent

### Tagline

A human-in-the-loop automation agent for routing opportunity inboxes into build, wait, or approval queues.

### What It Does

ClaimDesk Agent receives opportunity messages, extracts the key facts, routes them into a ranked queue, and separates automatable work from human-owned account, submission, and payment steps.

### Inspiration

Automation is most useful when it handles repetitive triage while preserving human control over accounts, submissions, and money.

### How We Built It

The current MVP is a display prototype with an opportunity inbox, automation stages, ranked queue, approval gates, and generated automation packet.

### Challenges

The challenge is showing UiPath-style automation value before platform access is confirmed, while keeping the workflow honest about human approval boundaries.

### Accomplishments

- Built a display-ready ClaimDesk dashboard.
- Added queue routing and approval gates.
- Generated a static deployment bundle.

### What's Next

Map the dashboard flow into the available UiPath surface after the user confirms Studio, Studio Web, Automation Cloud, or Labs access.

## Splunk Agentic Ops Challenge: Runbook Relay Agent

### Tagline

An agentic incident assistant that turns raw service logs into root cause, runbook steps, and postmortem draft.

### What It Does

Runbook Relay Agent reads checkout service events, detects incident signals, explains the probable cause, generates runbook steps, and drafts a postmortem.

### Inspiration

During incidents, operators need fast translation from logs to action. This prototype demonstrates that flow with synthetic service logs.

### How We Built It

The MVP uses a static dashboard and synthetic checkout logs to show severity, service, latency, anomaly counters, runbook steps, and postmortem text.

### Challenges

The main challenge is demonstrating Splunk-like operational value before real Splunk account/API access is available.

### Accomplishments

- Built a display-ready incident dashboard.
- Added synthetic log stream and incident analysis.
- Added runbook and postmortem generation.
- Generated a static deployment bundle.

### What's Next

Connect to real Splunk search/API after account access is available.

## Sui Overflow: Sui GrantFlow Agent

### Tagline

A Sui-focused milestone and wallet-safety assistant for grants, bounties, and hackathon projects.

### What It Does

Sui GrantFlow Agent turns a Sui project idea into milestones, acceptance criteria, wallet-safe handoff text, and a reviewer packet.

### Inspiration

Web3 project funding requires careful separation between public wallet information and private secrets. This project makes milestone and payment handoff safer and clearer.

### How We Built It

The current MVP is a static dashboard with milestone planning, public-address-only handoff, wallet safety warning, and reviewer packet generation.

### Challenges

The biggest challenge is deciding whether the final submission should stay at the app/tooling layer or add a Move package after track selection.

### Accomplishments

- Built a display-ready Sui dashboard.
- Added milestone and acceptance criteria generation.
- Added wallet safety copy and reviewer packet generation.
- Generated a static deployment bundle.

### What's Next

Select a Sui Overflow track, decide whether to add Sui SDK or Move code, and use only a public wallet address for submission/payment steps.

