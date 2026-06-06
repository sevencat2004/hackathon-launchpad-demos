# Devpost copy packets

Status: submission assets prepared; UiPath/Splunk submitted, Sui project page created, H0 AWS DynamoDB verified; not approved, not paid.
Price: mixed; H0 80,000 USD cash, UiPath 50,000 USD cash, Sui Overflow 500,000+ USD total prize pool / track-dependent, Splunk 20,000 USD total cash and feedback awards.

Public demo hub: `https://hackathon-launchpad-demos.vercel.app`
H0 Vercel project: `https://hackathon-launchpad-demos-gwik.vercel.app/h0/`

## H0: Zero Stack BountyOps

### Tagline

A planning desk for deciding which hackathons, bounties, and grants are actually worth building.

### What it does

Zero Stack BountyOps helps a builder make the first decision: should we pursue this or walk away?

The dashboard scores an opportunity across theme fit, build autonomy, payout collectability, time pressure, and account risk. It then explains the result in plain language and generates a handoff packet with next steps, user owned actions, and submission notes. Saved reports are written through a Vercel API route to Amazon DynamoDB table `h0_reports`.

### Inspiration

We kept running into the same trap: a prize page looks attractive, then the real constraints show up later. The work may need a platform account, a reviewer approval step, a payment profile, or a final submission click that only the account owner can do. We wanted a tool that makes those details visible before anyone burns a weekend.

### How we built it

The MVP is a Vercel-hosted web app built with HTML, CSS, JavaScript, a small Node.js API route, and Amazon DynamoDB. The browser handles the scoring workflow, while the serverless route writes saved report records to DynamoDB so the project uses an AWS database as the primary backend for report storage.

### Challenges

The hard part was keeping the tool honest. A score can look more certain than it really is, so the app shows the reasons beside the recommendation and keeps account, KYC, and final submission steps separate from the work the team can automate.

### Accomplishments

- Built a working dashboard with adjustable scoring.
- Added saved reports, DynamoDB-backed report storage, and Markdown packet export.
- Prepared a public static deployment with a dedicated H0 path.
- Wrote submission and demo scripts that separate builder work from account owner actions.

### What is next

Connect live opportunity fetchers, add richer report history and filtering, and use the same scoring model to coordinate the other project tracks.

## UiPath AgentHack: ClaimDesk Agent

### Tagline

A human approval queue for messy opportunity inboxes.

### What it does

ClaimDesk Agent takes an inbox of bounty, grant, and hackathon leads and turns it into a ranked work queue. The agent extracts useful facts, marks payout and account risk, and prepares a packet for the next human decision.

### Inspiration

Opportunity intake rarely arrives clean. It is a link in chat, a GitHub issue, a deadline, a platform rule, and sometimes a payment requirement all at once. We wanted to model the part of the workflow that automation can handle without pretending it should own the user's accounts or money.

### How we built it

The current demo is a static dashboard with a JSON opportunity inbox, visible automation stages, approval gates, and a generated packet. It is designed so the same stages can later map into Studio, Studio Web, Automation Cloud, or Labs after platform access is confirmed.

### Challenges

The main challenge was showing automation value without overstepping. The agent can triage and draft, but user approval stays explicit for logins, submissions, and payment onboarding.

### Accomplishments

- Built a display-ready opportunity inbox.
- Added queue ranking and stage visibility.
- Added human approval gates.
- Prepared a public static deployment path for the demo.

### What is next

Map the stages into the available UiPath surface and replace the fixture inbox with real intake sources.

## Splunk Agentic Ops Challenge: Runbook Relay Agent

### Tagline

From noisy checkout logs to a runbook an operator can use.

### What it does

Runbook Relay Agent reads synthetic checkout service events and turns them into a severity summary, likely cause, runbook steps, and a postmortem draft.

### Inspiration

During an incident, the useful story is buried in small signals: retries, timeouts, provider errors, latency spikes, and circuit breakers. We wanted the demo to show how an agent can turn those signals into something an operator can act on quickly.

### How we built it

The MVP uses a static dashboard, a synthetic log fixture, and a small JavaScript analyzer. It shows the log stream, service and latency summary, signal counters, recommended runbook steps, and a postmortem draft.

### Challenges

We used synthetic data so the demo can be public and safe. The next challenge is connecting the same flow to real Splunk search results once the account environment is ready.

### Accomplishments

- Built a working incident dashboard.
- Added synthetic checkout logs and incident analysis.
- Generated runbook steps and a postmortem draft.
- Prepared a public static deployment path for the demo.

### What is next

Connect the analyzer to Splunk search or exported incidents, then tune the runbook output against real operational data.

## Sui Overflow: Sui GrantFlow Agent

### Tagline

A safer handoff plan for Sui milestones, reviews, and public wallet details.

### What it does

Sui GrantFlow Agent turns a project idea into milestones, acceptance criteria, reviewer notes, and wallet safe handoff text. The app keeps one boundary clear: public wallet addresses are okay for submission paperwork, private keys and seed phrases are not.

### Inspiration

Web3 submissions mix product scope, milestone language, review criteria, and payment details. That is easy to mishandle, especially when a team is moving fast. We wanted a simple assistant that helps a builder prepare reviewer material without asking for sensitive wallet information.

### How we built it

The current MVP is a static dashboard with milestone planning, acceptance criteria, a wallet safety section, and reviewer packet generation.

### Challenges

The project still needs a final Sui Overflow track decision. Once that is selected, the next build can stay as a planning tool, connect to Sui SDK flows, or add a small Move package.

### Accomplishments

- Built a working Sui planning dashboard.
- Added milestone and acceptance criteria generation.
- Added public address only wallet handoff language.
- Prepared a public static deployment path for the demo.

### What is next

Pick the final Sui track, decide whether code should include Sui SDK or Move, and use only a public wallet address in any submission or payment step.
