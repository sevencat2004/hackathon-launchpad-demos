# ClaimDesk Agent

Status: MVP draft, not submitted, not paid.
Price: 50,000 USD cash prize pool.

ClaimDesk Agent is a human-in-the-loop automation demo for triaging bounty, hackathon, and
grant opportunities into a controlled queue.

## Current MVP

- opportunity inbox
- route-to-build or wait-for-access classification
- ranked queue
- human approval gates
- generated automation packet
- copy action

## Run

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:uipath
```

## Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:uipath
```

The deployable static bundle is written to `D:\coin\hackathon-launchpad\dist\uipath`.

