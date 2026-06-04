import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "outputs", "devpost-upload-assets");
const screenshotDir = path.join(root, "outputs", "screenshots");

const assets = [
  {
    file: "01-h0-zero-stack-bountyops.png",
    source: "h0.png",
    project: "Zero Stack BountyOps",
    event: "H0: Hack the Zero Stack",
    demo: "https://hackathon-launchpad-demos.vercel.app/h0/",
    price: "80,000 USD cash"
  },
  {
    file: "02-uipath-claimdesk-agent.png",
    source: "uipath.png",
    project: "ClaimDesk Agent",
    event: "UiPath AgentHack",
    demo: "https://hackathon-launchpad-demos.vercel.app/uipath/",
    price: "50,000 USD cash"
  },
  {
    file: "03-splunk-runbook-relay-agent.png",
    source: "splunk.png",
    project: "Runbook Relay Agent",
    event: "Splunk Agentic Ops Challenge",
    demo: "https://hackathon-launchpad-demos.vercel.app/splunk/",
    price: "20,000 USD total cash and feedback awards"
  },
  {
    file: "04-sui-grantflow-agent.png",
    source: "sui.png",
    project: "Sui GrantFlow Agent",
    event: "Sui Overflow 2026",
    demo: "https://hackathon-launchpad-demos.vercel.app/sui/",
    price: "500,000+ USD total prize pool / track-dependent"
  }
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const asset of assets) {
  copyFileSync(path.join(screenshotDir, asset.source), path.join(outDir, asset.file));
}

const manifest = `# Devpost upload assets

Status: upload package ready, not submitted, not approved, not paid.
Price: mixed; H0 80,000 USD cash, UiPath 50,000 USD cash, Splunk 20,000 USD total cash and feedback awards, Sui Overflow 500,000+ USD total prize pool / track-dependent.

Generated directory: \`D:\\coin\\hackathon-launchpad\\outputs\\devpost-upload-assets\`

Use these files when Devpost asks for project screenshots. Create draft pages first, then send screenshots to Codex before final submit.

## Files

${assets
  .map(
    (asset) => `- \`${asset.file}\`
  - Project: ${asset.project}
  - Event: ${asset.event}
  - Demo: ${asset.demo}
  - Prize: ${asset.price}`
  )
  .join("\n")}

## Guardrails

- Do not upload screenshots that show email, payment, token, API key, private key, seed phrase, tax, or bank data.
- Do not mark any project as submitted, approved, won, or paid until Devpost or the organizer confirms it.
- Stop before final submit and send Codex a screenshot of the review page.
`;

writeFileSync(path.join(outDir, "README.md"), manifest, "utf8");
writeFileSync(
  path.join(outDir, "manifest.json"),
  JSON.stringify(
    {
      status: "upload package ready, not submitted, not approved, not paid",
      publicDemoHub: "https://hackathon-launchpad-demos.vercel.app",
      githubRepo: "https://github.com/sevencat2004/hackathon-launchpad-demos",
      assets
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Devpost upload assets written to ${outDir}`);
