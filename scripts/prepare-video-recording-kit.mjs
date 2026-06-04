import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "outputs", "video-recording-kit");
const imageDir = path.join(outDir, "images");

const projects = [
  {
    slug: "h0",
    title: "Zero Stack BountyOps",
    event: "H0: Hack the Zero Stack",
    length: "40 seconds",
    demo: "https://hackathon-launchpad-demos.vercel.app/h0/",
    screenshot: "h0.png",
    image: "h0-zero-stack-bountyops.png",
    voiceover: [
      "We built Zero Stack BountyOps for the awkward moment before a team starts coding. A prize page can look attractive, but the real question is whether the work is collectible, buildable, and worth the risk.",
      "Here we enter an opportunity, adjust the practical factors, and watch the recommendation change. The dashboard explains the score instead of hiding it. At the end, it produces a packet with the next build steps, user owned actions, and submission notes."
    ],
    shots: [
      "Open the H0 dashboard and show the title and score.",
      "Change collectability and time pressure controls.",
      "Pause on the risk reasons.",
      "Generate, copy, or download the packet."
    ]
  },
  {
    slug: "uipath",
    title: "ClaimDesk Agent",
    event: "UiPath AgentHack",
    length: "35 seconds",
    demo: "https://hackathon-launchpad-demos.vercel.app/uipath/",
    screenshot: "uipath.png",
    image: "uipath-claimdesk-agent.png",
    voiceover: [
      "ClaimDesk Agent treats opportunity intake as a queue. Links, comments, platform steps, and payout rules come in messy. The agent extracts the facts and ranks what should happen next.",
      "The important part is the approval gate. Automation can prepare the packet, but the user still controls account access, final submissions, and payment steps."
    ],
    shots: [
      "Open the inbox and show multiple opportunity cards.",
      "Move attention to the automation stages.",
      "Show the ranked queue.",
      "Copy the generated automation packet."
    ]
  },
  {
    slug: "splunk",
    title: "Runbook Relay Agent",
    event: "Splunk Agentic Ops Challenge",
    length: "35 seconds",
    demo: "https://hackathon-launchpad-demos.vercel.app/splunk/",
    screenshot: "splunk.png",
    image: "splunk-runbook-relay-agent.png",
    voiceover: [
      "Runbook Relay Agent starts with noisy checkout service events. Instead of asking an operator to read every line, it surfaces the signals: timeouts, retries, circuit breakers, and provider errors.",
      "The result is a short incident summary, a runbook the responder can act on, and a postmortem draft for the handoff after the incident."
    ],
    shots: [
      "Open the Splunk dashboard and show the log stream.",
      "Highlight severity, service, and latency.",
      "Show signal counters.",
      "End on the runbook and postmortem draft."
    ]
  },
  {
    slug: "sui",
    title: "Sui GrantFlow Agent",
    event: "Sui Overflow 2026",
    length: "35 seconds",
    demo: "https://hackathon-launchpad-demos.vercel.app/sui/",
    screenshot: "sui.png",
    image: "sui-grantflow-agent.png",
    voiceover: [
      "Sui GrantFlow Agent is a planning tool for milestones and payment handoffs. It helps turn a project idea into reviewable work without mixing up public wallet information and private secrets.",
      "The demo creates milestones, acceptance criteria, and reviewer text. The wallet section keeps the boundary clear: only public addresses belong in submission paperwork."
    ],
    shots: [
      "Open the Sui dashboard and show the milestone planner.",
      "Show acceptance criteria.",
      "Pause on the public address only warning.",
      "Copy the reviewer packet."
    ]
  }
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(imageDir, { recursive: true });

for (const project of projects) {
  copyFileSync(
    path.join(root, "outputs", "screenshots", project.screenshot),
    path.join(imageDir, project.image)
  );
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hackathon Launchpad video recording kit</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <main class="shell">
      <header>
        <p class="eyebrow">Not submitted. Not approved. Not paid.</p>
        <h1>Video recording kit</h1>
        <p class="lede">Use this page as a calm prompt sheet for short Devpost demo recordings. Keep account details hidden and stop before any final submission action.</p>
      </header>
      <section class="projects">
        ${projects
          .map(
            (project) => `<article class="project" id="${project.slug}">
          <div class="copy">
            <p class="event">${project.event}</p>
            <h2>${project.title}</h2>
            <p class="meta">Target length: ${project.length}</p>
            <a href="${project.demo}" target="_blank" rel="noreferrer">Open demo</a>
            <h3>Voiceover</h3>
            ${project.voiceover.map((line) => `<p>${line}</p>`).join("\n            ")}
            <h3>Shots</h3>
            <ol>
              ${project.shots.map((shot) => `<li>${shot}</li>`).join("\n              ")}
            </ol>
          </div>
          <img src="./images/${project.image}" alt="${project.title} screenshot">
        </article>`
          )
          .join("\n        ")}
      </section>
    </main>
  </body>
</html>
`;

const css = `:root {
  --bg: #f5f1ea;
  --panel: #ffffff;
  --ink: #101720;
  --muted: #5d6875;
  --line: #d8d0c5;
  --accent: #0b63ce;
  --green: #1c7c5b;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 40px 0;
}

header {
  margin-bottom: 28px;
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
  font-size: clamp(2.6rem, 8vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: 0;
}

.lede {
  max-width: 760px;
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.6;
}

.projects {
  display: grid;
  gap: 18px;
}

.project {
  display: grid;
  grid-template-columns: minmax(320px, 0.78fr) minmax(360px, 1fr);
  gap: 22px;
  align-items: start;
  padding: 20px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}

h2 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: 0;
}

h3 {
  margin: 24px 0 8px;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: var(--muted);
}

p,
li {
  line-height: 1.55;
}

.meta {
  color: var(--muted);
  margin: 10px 0 14px;
}

a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  background: var(--accent);
  color: #ffffff;
  border-radius: 8px;
  font-weight: 800;
  text-decoration: none;
}

img {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #eef2f6;
}

@media (max-width: 860px) {
  .project {
    grid-template-columns: 1fr;
  }
}
`;

writeFileSync(path.join(outDir, "index.html"), html, "utf8");
writeFileSync(path.join(outDir, "styles.css"), css, "utf8");
writeFileSync(
  path.join(outDir, "README.md"),
  `# Video recording kit

Status: recording helper ready, not rendered, not submitted, not approved, not paid.

Open \`D:\\coin\\hackathon-launchpad\\outputs\\video-recording-kit\\index.html\` in a browser when recording Devpost demo videos. Use public Vercel links, hide personal account details, and stop before final submission.
`,
  "utf8"
);

console.log(`Video recording kit written to ${outDir}`);
