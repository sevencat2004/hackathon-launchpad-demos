# Runbook Relay Agent

Status: submitted to Splunk Agentic Ops Hackathon, not approved, not paid.
Price: 20,000 USD total cash and feedback awards.

Runbook Relay Agent is an agentic operations assistant for turning incident logs into root
cause, runbook steps, and postmortem draft.

## Current MVP

- synthetic checkout log stream
- incident severity summary
- probable cause explanation
- signal counters
- runbook generation
- postmortem draft
- copy action for operator handoff

## Run

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:splunk
```

## Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:splunk
```

The deployable static bundle is written to `D:\coin\hackathon-launchpad\dist\splunk`.
