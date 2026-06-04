# Hackathon Launchpad Architecture Diagram

Status: submission support asset.

This repository contains several small hackathon demos under one public Vercel hub. The H0 submission uses the Zero Stack BountyOps demo.

```mermaid
flowchart LR
  User["Reviewer or operator"] --> Hub["Vercel static hub"]
  Hub --> H0["Zero Stack BountyOps demo"]
  Hub --> UiPath["ClaimDesk Agent demo"]
  Hub --> Splunk["Runbook Relay Agent demo"]
  Hub --> Sui["Sui GrantFlow Agent demo"]

  H0 --> Browser["Browser scoring workflow"]
  Browser --> LocalPacket["Generated submission packet"]
  Browser --> LocalStorage["Local saved reports"]
  Browser --> Api["Optional Vercel API route"]
  Api --> Aws["DynamoDB-compatible AWS storage when environment variables are configured"]

  Splunk --> SyntheticLogs["Synthetic service logs"]
  SyntheticLogs --> Runbook["Incident summary, runbook steps, and postmortem draft"]

  UiPath --> Queue["Opportunity intake queue"]
  Queue --> Approval["Human approval gates"]

  Sui --> Milestones["Milestones and public-address-only wallet handoff"]
```

## Notes

- The public demo is hosted at `https://hackathon-launchpad-demos.vercel.app`.
- Source code is public at `https://github.com/sevencat2004/hackathon-launchpad-demos`.
- The H0 demo can run as a static browser app. The optional API route is prepared for AWS-backed storage once eligible AWS environment variables are configured.
- User-owned actions such as account access, final submission, tax, KYC, and payment setup stay outside the application.
