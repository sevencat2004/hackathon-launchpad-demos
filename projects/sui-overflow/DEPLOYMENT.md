# Sui Deployment Notes

Status: DeepSurge project page created and visible, not approved, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.

## Local Preview

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run serve:sui
```

Open:

```text
http://127.0.0.1:4176/
```

## Static Build

From `D:\coin\hackathon-launchpad`:

```powershell
npm.cmd run build:sui
```

Output:

```text
D:\coin\hackathon-launchpad\dist\sui
```

## Wallet Safety

The current MVP uses a placeholder public address only. If the project proceeds to official
submission, the user should provide only a public Sui address. Never share private keys, seed
phrases, recovery phrases, or one-time codes.
