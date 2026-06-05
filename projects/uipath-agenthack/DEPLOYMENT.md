# UiPath Deployment Notes

Status: submitted to UiPath AgentHack, not approved, not paid.
Price: 50,000 USD cash prize pool.

## Local Preview

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:uipath
```

Open:

```text
http://127.0.0.1:4175/
```

## Static Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:uipath
```

Output:

```text
D:\coin\hackathon-launchpad\dist\uipath
```

## UiPath Platform Mapping

The current MVP is a display prototype. After the user confirms the available UiPath surface
Studio, Studio Web, Automation Cloud, or Labs, map the route/approval flow into that
environment.

User-owned steps:

- Log in to UiPath.
- Complete any verification or account setup.
- Complete final Devpost submission and payment/KYC steps.
