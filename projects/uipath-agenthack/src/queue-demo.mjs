import { readFileSync } from "node:fs";
import path from "node:path";

const inbox = JSON.parse(
  readFileSync(path.join(process.cwd(), "fixtures", "opportunity-inbox.json"), "utf8")
);

const queue = inbox.map((item, index) => ({
  rank: index + 1,
  status: "submitted to UiPath AgentHack, not approved, not paid",
  price: item.amount,
  source: item.source,
  title: item.title,
  nextAction: item.action,
  humanApprovalRequired: true
}));

console.log(JSON.stringify(queue, null, 2));
