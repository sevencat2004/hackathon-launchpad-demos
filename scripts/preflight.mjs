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
check(existsSync(path.join(root, "USER_NEXT_STEPS.zh-CN.md")), "root Chinese user next steps exists");
check(existsSync(path.join(root, "DEVPOST_COPY_PACKETS.md")), "root Devpost copy packets exists");
check(existsSync(path.join(root, "DEVPOST_NEXT_ACTIONS.zh-CN.md")), "root Devpost next actions exists");
check(existsSync(path.join(root, "SUBMISSION_FIELD_PACKETS.md")), "root submission field packets exists");
check(existsSync(path.join(root, "VIDEO_STORYBOARDS.md")), "root video storyboards exists");
check(existsSync(path.join(root, "VERCEL_DEPLOYMENT_PACKET.zh-CN.md")), "root Vercel deployment packet exists");

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

for (const file of ["h0.png", "splunk.png", "uipath.png", "sui.png"]) {
  const filePath = path.join(root, "outputs", "screenshots", file);
  check(existsSync(filePath), `outputs/screenshots/${file} exists`);
}

if (failed) {
  process.exit(1);
}

console.log("First-stage launchpad preflight passed.");
