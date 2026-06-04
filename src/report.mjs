import { rankedOpportunities } from "./opportunities.mjs";

export function generateMarkdownReport() {
  const lines = [
    "# Hackathon Launch Report",
    "",
    "Status: first-stage started, not submitted, not paid.",
    "Price: mixed; see each project entry.",
    "",
    "## Ranked Tracks",
    ""
  ];

  for (const item of rankedOpportunities()) {
    lines.push(`### ${item.title}`);
    lines.push("");
    lines.push(`- Platform: ${item.platform}`);
    lines.push(`- Price: ${item.price}`);
    lines.push(`- Deadline: ${item.deadline}`);
    lines.push(`- Score: ${item.score}/100`);
    lines.push(`- Recommendation: ${item.recommendation}`);
    lines.push(`- Reasons: ${item.reasons.join("; ") || "no special flags"}`);
    lines.push("");
  }

  lines.push("## User Actions Needed");
  lines.push("");
  lines.push("- Register/log in to Devpost for UiPath, Splunk, and H0 draft pages.");
  lines.push("- H0 final submit is blocked unless AWS promotional credits or an AWS account become available.");
  lines.push("- Confirm UiPath platform access for UiPath AgentHack.");
  lines.push("- Confirm Splunk account/trial access for Splunk.");
  lines.push("- Confirm Sui wallet/account only if Sui track is actively pursued.");
  lines.push("- User must complete final submissions and payment/KYC/tax steps.");
  lines.push("");

  return `${lines.join("\n")}\n`;
}
