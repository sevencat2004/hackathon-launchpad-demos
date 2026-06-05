# Splunk Deployment Notes

Status: submitted to Splunk Agentic Ops Hackathon, not approved, not paid.
Price: 20,000 USD total cash and feedback awards.

## Local Preview

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:splunk
```

Open:

```text
http://127.0.0.1:4174/
```

## Static Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:splunk
```

Output:

```text
D:\coin\hackathon-launchpad\dist\splunk
```

## Live Splunk Integration

The current MVP uses synthetic logs so it can be demonstrated without account access.
To connect a real Splunk environment later, the user must provide the Splunk URL and a safe
local token setup through `.env`; do not paste long-lived credentials into chat.
