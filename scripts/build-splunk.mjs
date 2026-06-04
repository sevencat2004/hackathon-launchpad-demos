import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "projects", "splunk-agentic-ops", "public");
const outDir = path.join(root, "dist", "splunk");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(source, outDir, { recursive: true });

writeFileSync(
  path.join(outDir, "vercel.json"),
  JSON.stringify(
    {
      cleanUrls: true,
      trailingSlash: false,
      rewrites: [{ source: "/(.*)", destination: "/index.html" }]
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Splunk static build written to ${outDir}`);

