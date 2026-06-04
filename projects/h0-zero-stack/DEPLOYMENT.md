# H0 Deployment Notes

Status: MVP draft, not submitted, not paid.
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

This H0 MVP is currently static and can be deployed as a static site. Use the generated
`dist\h0` folder or connect the repo and set the output directory to `dist/h0` after running
the build command.

User-owned steps:

- Log in to Vercel.
- Create/import the project.
- Confirm final public URL.
- Keep any AWS/API/account credentials out of chat.

