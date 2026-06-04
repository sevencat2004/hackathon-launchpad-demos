import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { generateMarkdownReport } from "../src/report.mjs";

const outDir = path.join(process.cwd(), "reports");
mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, "first-stage-launch-report.md");
writeFileSync(outPath, generateMarkdownReport(), "utf8");
console.log(outPath);

