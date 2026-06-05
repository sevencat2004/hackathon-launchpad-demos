import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist", "vercel-site");
const h0ApiSource = path.join(root, "projects", "h0-zero-stack", "api");
const demos = [
  {
    slug: "h0",
    source: path.join(root, "dist", "h0"),
    title: "Zero Stack BountyOps",
    event: "H0: Hack the Zero Stack",
    prize: "80,000 USD cash",
    summary: "Ranks hackathon, bounty, and grant opportunities by fit, autonomy, payout collectability, and risk."
  },
  {
    slug: "uipath",
    source: path.join(root, "dist", "uipath"),
    title: "ClaimDesk Agent",
    event: "UiPath AgentHack",
    prize: "50,000 USD cash",
    summary: "Routes opportunity inboxes into automation queues, approval gates, and submission packets."
  },
  {
    slug: "splunk",
    source: path.join(root, "dist", "splunk"),
    title: "Runbook Relay Agent",
    event: "Splunk Agentic Ops Challenge",
    prize: "20,000 USD total cash and feedback awards",
    summary: "Turns synthetic service logs into severity signals, runbook steps, and a postmortem draft."
  },
  {
    slug: "sui",
    source: path.join(root, "dist", "sui"),
    title: "Sui GrantFlow Agent",
    event: "Sui Overflow 2026",
    prize: "500,000+ USD total prize pool / track-dependent",
    summary: "Creates Sui project milestones, acceptance criteria, wallet-safe handoff text, and reviewer packets."
  }
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const demo of demos) {
  cpSync(demo.source, path.join(outDir, demo.slug), { recursive: true });
}
rmSync(path.join(outDir, "h0", "api"), { recursive: true, force: true });
rmSync(path.join(outDir, "h0", "package.json"), { force: true });
cpSync(h0ApiSource, path.join(outDir, "api"), { recursive: true });

writeFileSync(
  path.join(outDir, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hackathon Launchpad</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <main class="shell">
      <section class="intro">
        <p class="eyebrow">Four contest projects, one deployable demo hub</p>
        <h1>Hackathon Launchpad</h1>
        <p class="lede">A public preview hub for hackathon projects focused on agentic bounty triage, operations workflows, and reviewer-ready handoff packets.</p>
      </section>
      <section class="grid" aria-label="Project demos">
        ${demos
          .map(
            (demo) => `<article class="project">
          <div>
            <p class="event">${demo.event}</p>
            <h2>${demo.title}</h2>
            <p>${demo.summary}</p>
          </div>
          <div class="meta">
            <span>${demo.prize}</span>
            <a href="/${demo.slug}/">Open demo</a>
          </div>
        </article>`
          )
          .join("\n        ")}
      </section>
    </main>
  </body>
</html>
`,
  "utf8"
);

writeFileSync(
  path.join(outDir, "styles.css"),
  `:root {
  color-scheme: light;
  --bg: #f6f2ea;
  --ink: #111418;
  --muted: #5f6670;
  --line: #d9d2c5;
  --panel: #ffffff;
  --accent: #0b6bcb;
  --accent-ink: #ffffff;
  --green: #1a7f64;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.shell {
  width: min(1120px, calc(100% - 36px));
  margin: 0 auto;
  padding: 56px 0;
}

.intro {
  max-width: 760px;
}

.eyebrow,
.event {
  margin: 0 0 10px;
  color: var(--green);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.4rem, 7vw, 5.6rem);
  line-height: 0.95;
  letter-spacing: 0;
}

.lede {
  margin: 22px 0 0;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.65;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 38px;
}

.project {
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 24px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}

h2 {
  margin: 0;
  font-size: 1.45rem;
  line-height: 1.18;
  letter-spacing: 0;
}

.project p:not(.event) {
  margin: 14px 0 0;
  color: var(--muted);
  line-height: 1.55;
}

.meta {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid var(--line);
  padding-top: 18px;
}

.meta span {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.35;
}

a {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  background: var(--accent);
  color: var(--accent-ink);
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
}

@media (max-width: 760px) {
  .shell {
    width: min(100% - 24px, 1120px);
    padding: 32px 0;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .project {
    min-height: 230px;
  }

  .meta {
    align-items: stretch;
    flex-direction: column;
  }
}
`,
  "utf8"
);

writeFileSync(
  path.join(outDir, "package.json"),
  JSON.stringify(
    {
      type: "commonjs"
    },
    null,
    2
  ),
  "utf8"
);

writeFileSync(
  path.join(outDir, "vercel.json"),
  JSON.stringify(
    {
      cleanUrls: true,
      trailingSlash: true
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Vercel static hub written to ${outDir}`);
