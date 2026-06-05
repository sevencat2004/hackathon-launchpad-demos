import { readFileSync } from "node:fs";
import path from "node:path";

const fixturePath = path.join(process.cwd(), "fixtures", "synthetic-logs.json");
const logs = JSON.parse(readFileSync(fixturePath, "utf8"));

const errors = logs.filter((row) => row.level === "error");
const slow = logs.filter((row) => row.latencyMs >= 1000);
const services = [...new Set(logs.map((row) => row.service))];

const incident = {
  status: "submitted to Splunk Agentic Ops Hackathon, not approved, not paid",
  price: "20,000 USD total cash and feedback awards",
  service: services[0] ?? "unknown",
  severity: errors.length >= 2 ? "high" : "medium",
  probableCause: "payment provider timeout caused checkout retries and circuit breaker activation",
  signals: {
    totalEvents: logs.length,
    errors: errors.length,
    slowEvents: slow.length,
    maxLatencyMs: Math.max(...logs.map((row) => row.latencyMs))
  },
  runbook: [
    "Check external payment provider health page.",
    "Inspect recent deploys for checkout-api.",
    "Keep circuit breaker open while error rate is high.",
    "Route new payments to fallback provider if configured.",
    "Post customer-impact note and update incident timeline."
  ],
  postmortemDraft:
    "Checkout degraded after payment provider timeouts triggered retries and circuit breaker activation. Immediate mitigation is provider health verification and fallback routing."
};

console.log(JSON.stringify(incident, null, 2));
