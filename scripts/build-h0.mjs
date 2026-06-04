import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "projects", "h0-zero-stack", "public");
const apiSource = path.join(root, "projects", "h0-zero-stack", "api");
const outDir = path.join(root, "dist", "h0");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(source, outDir, { recursive: true });
cpSync(apiSource, path.join(outDir, "api"), { recursive: true });

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
      trailingSlash: false,
      rewrites: [{ source: "/(.*)", destination: "/index.html" }]
    },
    null,
    2
  ),
  "utf8"
);

console.log(`H0 static build written to ${outDir}`);
