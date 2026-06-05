# H0 Deployment Notes

Status: credits requested; draft-only until AWS database evidence exists, not approved, not paid.
Price: 80,000 USD cash prize pool.

## Local Preview

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:h0
```

Open:

```text
http://127.0.0.1:4173/
```

## Static Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:h0
```

Output:

```text
D:\coin\hackathon-launchpad\dist\h0
```

## Vercel Path

This H0 MVP can run as a static app with a serverless API for DynamoDB-backed saved reports.
Use the generated `dist\h0` folder or connect the repo and set the output directory to
`dist/h0` after running the build command.

The build copies this API route:

```text
dist\h0\api\h0-reports.js
```

## AWS Environment Variables

Set these only in Vercel Environment Variables, never in chat:

```text
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
H0_REPORTS_TABLE
```

Optional for temporary AWS credentials:

```text
AWS_SESSION_TOKEN
```

The recommended DynamoDB table key is `reportId` as a string partition key. The API uses
`PutItem` and stores opportunity URL, amount, deadline, score, recommendation, packet text,
and creation time.

User-owned steps:

- Log in to Vercel.
- Create/import the project.
- Confirm final public URL.
- Keep any AWS/API/account credentials out of chat.
