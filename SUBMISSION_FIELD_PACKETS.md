# Submission field packets

Status: draft assets, not submitted, not paid.
Price: mixed; H0 80,000 USD cash, UiPath 50,000 USD cash, Sui Overflow 500,000+ USD total prize pool / track-dependent, Splunk 20,000 USD total cash and feedback awards.

Use `{PUBLIC_SITE_URL}` after Vercel deploys the static hub.

## Shared links

- Public demo hub: `{PUBLIC_SITE_URL}`
- GitHub repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- H0 demo: `{PUBLIC_SITE_URL}/h0/`
- UiPath demo: `{PUBLIC_SITE_URL}/uipath/`
- Splunk demo: `{PUBLIC_SITE_URL}/splunk/`
- Sui demo: `{PUBLIC_SITE_URL}/sui/`

## H0: Zero Stack BountyOps

- Project name: `Zero Stack BountyOps`
- Tagline: `A planning desk for deciding which hackathons, bounties, and grants are actually worth building.`
- Demo URL: `{PUBLIC_SITE_URL}/h0/`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML, CSS, JavaScript, Node.js static build scripts`

### Short description

Zero Stack BountyOps helps a builder slow down before committing days of work. Paste or describe an opportunity, adjust practical risk factors, and the app gives a pursuit score, plain reasons, and a packet that separates build tasks from account, payment, and submission steps.

### Longer description

The first problem this project solves is not coding. It is choosing. Prize pages often look simple, but the hidden work is scattered across deadlines, platform access, review rules, duplicated submissions, KYC, payout risk, and manual final clicks.

Zero Stack BountyOps turns that messy first hour into a visible workflow. The dashboard scores an opportunity across theme fit, autonomy, collectability, time pressure, and account risk. It then explains why the score moved and generates a handoff packet that a team can use before starting implementation.

The current build is intentionally practical: a browser dashboard, adjustable controls, local saved reports, Markdown export, and a static deployment that reviewers can open without credentials.

### What to show in the video

Open the H0 demo, change at least two risk sliders, point out the recommendation shift, then save or download the generated packet.

## UiPath AgentHack: ClaimDesk Agent

- Project name: `ClaimDesk Agent`
- Tagline: `A human approval queue for messy opportunity inboxes.`
- Demo URL: `{PUBLIC_SITE_URL}/uipath/`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML, CSS, JavaScript, JSON fixture, Node.js static build scripts`

### Short description

ClaimDesk Agent takes an inbox of bounty, grant, and hackathon leads and routes each item into a ranked queue. The prototype keeps human approval in the loop for accounts, submissions, and payment steps while letting automation prepare the repetitive triage work.

### Longer description

Most opportunity work starts as fragments: a link in chat, a prize page, a GitHub issue, a comment thread, a platform login, and a payout rule that might be easy to miss. ClaimDesk Agent treats that intake as a queue instead of a scramble.

The demo shows opportunity items moving through intake, extraction, routing, approval, and packet generation. It is built as a UiPath friendly workflow map: the agent can prepare facts and drafts, but the user still controls account authorization, final submission, and payment onboarding.

The current version uses a static dashboard and a small JSON inbox so reviewers can see the flow immediately. After platform access is confirmed, the same stages can be mapped into Studio, Studio Web, Automation Cloud, or Labs.

### What to show in the video

Open the UiPath demo, move through the inbox, show the ranked queue, call out the approval gates, and copy the generated automation packet.

## Splunk Agentic Ops Challenge: Runbook Relay Agent

- Project name: `Runbook Relay Agent`
- Tagline: `From noisy checkout logs to a runbook an operator can use.`
- Demo URL: `{PUBLIC_SITE_URL}/splunk/`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML, CSS, JavaScript, synthetic log fixture, Node.js analysis script`

### Short description

Runbook Relay Agent reads synthetic checkout service events, detects incident signals, and turns them into a severity summary, likely cause, runbook steps, and a postmortem draft.

### Longer description

Incidents do not usually arrive as neat summaries. They arrive as log lines, retries, timeouts, provider errors, and half-written notes from people trying to keep the service alive.

Runbook Relay Agent demonstrates a narrow version of the operator workflow. It reads checkout events, surfaces the signals that matter, explains the probable cause, and writes the next steps in language a responder can act on. The dashboard also drafts a postmortem so the handoff does not get lost after the incident ends.

This first build uses synthetic data because it is safe to show publicly. Once Splunk account access is available, the same analysis shape can be connected to Splunk search results or exported incidents.

### What to show in the video

Open the Splunk demo, show the log stream, point to the signal counters, then show the generated runbook and postmortem.

## Sui Overflow: Sui GrantFlow Agent

- Project name: `Sui GrantFlow Agent`
- Tagline: `A safer handoff plan for Sui milestones, reviews, and public wallet details.`
- Demo URL: `{PUBLIC_SITE_URL}/sui/`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML, CSS, JavaScript, Node.js milestone model`

### Short description

Sui GrantFlow Agent turns a Sui project idea into milestones, acceptance criteria, reviewer notes, and wallet safe handoff text. It keeps public wallet addresses separate from private keys or seed phrases.

### Longer description

Sui builders have to manage more than code. A credible submission needs milestones, track fit, acceptance criteria, review language, and a safe payment handoff. That gets risky when people confuse a public wallet address with secrets that should never leave the user's device.

Sui GrantFlow Agent focuses on that handoff. The demo creates milestone plans, acceptance criteria, and reviewer packets while repeating one hard boundary: only public addresses belong in submission or payment paperwork.

The current version is a static prototype. The next build decision is whether to keep it as a planning tool, connect it to Sui SDK flows, or add a small Move package after the exact Sui Overflow track is selected.

### What to show in the video

Open the Sui demo, create or review milestones, show the wallet safety section, and copy the reviewer packet.
