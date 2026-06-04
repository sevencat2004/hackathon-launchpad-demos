import { mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outDir = path.join(root, "outputs", "screenshots");
mkdirSync(outDir, { recursive: true });

const targets = [
  ["h0", path.join(root, "dist", "h0", "index.html")],
  ["splunk", path.join(root, "dist", "splunk", "index.html")],
  ["uipath", path.join(root, "dist", "uipath", "index.html")],
  ["sui", path.join(root, "dist", "sui", "index.html")]
];

let failed = false;

for (const [name, filePath] of targets) {
  const outPath = path.join(outDir, `${name}.png`);
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,1300",
    `--screenshot=${outPath}`,
    pathToFileURL(filePath).href
  ];
  const result = spawnSync(chrome, args, { encoding: "utf8" });
  if (result.status !== 0) {
    failed = true;
    console.error(`Failed screenshot for ${name}`);
    if (result.stderr) console.error(result.stderr);
  } else {
    console.log(outPath);
  }
}

if (failed) {
  process.exit(1);
}
