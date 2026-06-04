import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const projects = [
  "h0-zero-stack",
  "uipath-agenthack",
  "sui-overflow",
  "splunk-agentic-ops"
];

const requiredFiles = [
  "PROJECT_BRIEF.md",
  "USER_ACTIONS.md",
  "MVP_PLAN.md",
  "SUBMISSION_CHECKLIST.md",
  "SUBMISSION_DRAFT.md",
  "DEMO_SCRIPT.md",
  "SCREENSHOT_PLAN.md"
];

let failed = false;

function check(condition, message) {
  if (condition) {
    console.log(`PASS ${message}`);
    return;
  }
  failed = true;
  console.error(`FAIL ${message}`);
}

check(existsSync(path.join(root, "README.md")), "root README exists");
check(existsSync(path.join(root, "LICENSE")), "root license exists");
check(existsSync(path.join(root, "architecture_diagram.md")), "root architecture diagram exists");
check(existsSync(path.join(root, "USER_NEXT_STEPS.zh-CN.md")), "root Chinese user next steps exists");
check(existsSync(path.join(root, "DEVPOST_COPY_PACKETS.md")), "root Devpost copy packets exists");
check(existsSync(path.join(root, "DEVPOST_NEXT_ACTIONS.zh-CN.md")), "root Devpost next actions exists");
check(existsSync(path.join(root, "FINAL_SUBMISSION_REVIEW.zh-CN.md")), "root final submission review exists");
check(existsSync(path.join(root, "SUBMISSION_FIELD_PACKETS.md")), "root submission field packets exists");
check(existsSync(path.join(root, "VIDEO_STORYBOARDS.md")), "root video storyboards exists");
check(existsSync(path.join(root, "VERCEL_DEPLOYMENT_PACKET.zh-CN.md")), "root Vercel deployment packet exists");
check(existsSync(path.join(root, "docs", "uipath-claimdesk-agent-deck.md")), "UiPath presentation deck exists");
check(existsSync(path.join(root, "docs", "splunk-runbook-relay-agent-deck.md")), "Splunk presentation deck exists");
check(existsSync(path.join(root, "docs", "sui-grantflow-agent-submission-packet.md")), "Sui submission packet exists");
check(existsSync(path.join(root, "docs", "four-project-submission-qa.md")), "four-project submission QA exists");
check(existsSync(path.join(root, "docs", "h0-aws-evidence-template.md")), "H0 AWS evidence template exists");
check(existsSync(path.join(root, "outputs", "uipath-claimdesk-agent-demo.mp4")), "UiPath demo video exists");
check(existsSync(path.join(root, "outputs", "splunk-runbook-relay-agent-demo.mp4")), "Splunk demo video exists");
check(existsSync(path.join(root, "outputs", "h0-zero-stack-bountyops-demo.mp4")), "H0 demo video exists");
check(existsSync(path.join(root, "outputs", "sui-grantflow-agent-demo.mp4")), "Sui demo video exists");
check(existsSync(path.join(root, "scripts", "prepare-devpost-assets.mjs")), "Devpost asset script exists");
check(existsSync(path.join(root, "scripts", "prepare-video-recording-kit.mjs")), "video recording kit script exists");

for (const project of projects) {
  const dir = path.join(root, "projects", project);
  check(existsSync(dir), `${project} directory exists`);

  for (const file of requiredFiles) {
    const filePath = path.join(dir, file);
    check(existsSync(filePath), `${project}/${file} exists`);
    if (existsSync(filePath)) {
      const text = readFileSync(filePath, "utf8");
      check(text.includes("Price:"), `${project}/${file} has price marker`);
      check(text.includes("Status:"), `${project}/${file} has status marker`);
    }
  }
}

for (const file of ["index.html", "styles.css", "app.js"]) {
  const filePath = path.join(root, "projects", "h0-zero-stack", "public", file);
  check(existsSync(filePath), `h0-zero-stack/public/${file} exists`);
}

for (const file of ["README.md", "DEPLOYMENT.md"]) {
  const filePath = path.join(root, "projects", "h0-zero-stack", file);
  check(existsSync(filePath), `h0-zero-stack/${file} exists`);
}
check(existsSync(path.join(root, "projects", "h0-zero-stack", "AWS_COMPLIANCE_PLAN.md")), "h0-zero-stack/AWS_COMPLIANCE_PLAN.md exists");
check(existsSync(path.join(root, "projects", "h0-zero-stack", "AWS_USER_HANDOFF.zh-CN.md")), "h0-zero-stack/AWS_USER_HANDOFF.zh-CN.md exists");
check(existsSync(path.join(root, "projects", "h0-zero-stack", "api", "h0-reports.js")), "h0-zero-stack/api/h0-reports.js exists");

for (const file of ["index.html", "styles.css", "app.js"]) {
  const filePath = path.join(root, "projects", "splunk-agentic-ops", "public", file);
  check(existsSync(filePath), `splunk-agentic-ops/public/${file} exists`);
}

for (const file of ["README.md", "DEPLOYMENT.md"]) {
  const filePath = path.join(root, "projects", "splunk-agentic-ops", file);
  check(existsSync(filePath), `splunk-agentic-ops/${file} exists`);
}

for (const file of ["index.html", "styles.css", "app.js"]) {
  const filePath = path.join(root, "projects", "uipath-agenthack", "public", file);
  check(existsSync(filePath), `uipath-agenthack/public/${file} exists`);
}

for (const file of ["README.md", "DEPLOYMENT.md"]) {
  const filePath = path.join(root, "projects", "uipath-agenthack", file);
  check(existsSync(filePath), `uipath-agenthack/${file} exists`);
}

for (const file of ["index.html", "styles.css", "app.js"]) {
  const filePath = path.join(root, "projects", "sui-overflow", "public", file);
  check(existsSync(filePath), `sui-overflow/public/${file} exists`);
}

for (const file of ["README.md", "DEPLOYMENT.md"]) {
  const filePath = path.join(root, "projects", "sui-overflow", file);
  check(existsSync(filePath), `sui-overflow/${file} exists`);
}
check(existsSync(path.join(root, "projects", "sui-overflow", "TRACK_DECISION.md")), "sui-overflow/TRACK_DECISION.md exists");
check(existsSync(path.join(root, "projects", "sui-overflow", "USER_SUBMISSION_CHECKLIST.zh-CN.md")), "sui-overflow/USER_SUBMISSION_CHECKLIST.zh-CN.md exists");
check(existsSync(path.join(root, "projects", "sui-overflow", "SUI_WALLET_HANDOFF.zh-CN.md")), "sui-overflow/SUI_WALLET_HANDOFF.zh-CN.md exists");

for (const file of ["h0.png", "splunk.png", "uipath.png", "sui.png"]) {
  const filePath = path.join(root, "outputs", "screenshots", file);
  check(existsSync(filePath), `outputs/screenshots/${file} exists`);
}

for (const file of [
  "01-h0-zero-stack-bountyops.png",
  "02-uipath-claimdesk-agent.png",
  "03-splunk-runbook-relay-agent.png",
  "04-sui-grantflow-agent.png",
  "README.md",
  "manifest.json"
]) {
  const filePath = path.join(root, "outputs", "devpost-upload-assets", file);
  check(existsSync(filePath), `outputs/devpost-upload-assets/${file} exists`);
}

for (const file of [
  "index.html",
  "styles.css",
  "README.md",
  path.join("images", "h0-zero-stack-bountyops.png"),
  path.join("images", "uipath-claimdesk-agent.png"),
  path.join("images", "splunk-runbook-relay-agent.png"),
  path.join("images", "sui-grantflow-agent.png")
]) {
  const filePath = path.join(root, "outputs", "video-recording-kit", file);
  check(existsSync(filePath), `outputs/video-recording-kit/${file} exists`);
}

if (failed) {
  process.exit(1);
}

console.log("First-stage launchpad preflight passed.");
