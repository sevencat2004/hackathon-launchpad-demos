const logs = [
  {
    timestamp: "02:15:01",
    service: "checkout-api",
    level: "info",
    message: "request completed",
    latencyMs: 142,
    status: 200
  },
  {
    timestamp: "02:16:18",
    service: "checkout-api",
    level: "warn",
    message: "payment provider retry",
    latencyMs: 1840,
    status: 202
  },
  {
    timestamp: "02:16:42",
    service: "checkout-api",
    level: "error",
    message: "payment provider timeout",
    latencyMs: 5000,
    status: 504
  },
  {
    timestamp: "02:17:03",
    service: "checkout-api",
    level: "error",
    message: "circuit breaker opened for payment provider",
    latencyMs: 4900,
    status: 503
  }
];

const runbook = [
  "Check external payment provider health page.",
  "Inspect recent deploys for checkout-api.",
  "Keep circuit breaker open while error rate is high.",
  "Route new payments to fallback provider if configured.",
  "Post customer-impact note and update incident timeline."
];

function analyze() {
  const errors = logs.filter((row) => row.level === "error");
  const slow = logs.filter((row) => row.latencyMs >= 1000);
  const maxLatency = Math.max(...logs.map((row) => row.latencyMs));
  return {
    severity: errors.length >= 2 ? "high" : "medium",
    service: logs[0].service,
    cause: "Payment provider timeout caused checkout retries and circuit breaker activation.",
    signals: {
      events: logs.length,
      errors: errors.length,
      slowEvents: slow.length,
      maxLatency
    },
    postmortem:
      "Checkout degraded after payment provider timeouts triggered retries and circuit breaker activation. Immediate mitigation is provider health verification and fallback routing."
  };
}

function renderLogs() {
  document.querySelector("#logs").innerHTML = logs
    .map(
      (row) =>
        `<article class="log-row"><span>${row.timestamp}</span><span class="level-${row.level}">${row.level}</span><span>${row.message} · ${row.latencyMs} ms · ${row.status}</span></article>`
    )
    .join("");
}

function renderAnalysis() {
  const incident = analyze();
  document.querySelector("#severity").textContent = incident.severity;
  document.querySelector("#service").textContent = incident.service;
  document.querySelector("#latency").textContent = `${incident.signals.maxLatency} ms`;
  document.querySelector("#cause").textContent = incident.cause;
  document.querySelector("#signals").innerHTML = Object.entries(incident.signals)
    .map(([key, value]) => `<article><strong>${value}</strong><br /><span>${key}</span></article>`)
    .join("");
  document.querySelector("#runbook").innerHTML = runbook.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#postmortem").textContent = [
    "Status: MVP draft, not submitted, not paid.",
    "Price: 20,000 USD total cash and feedback awards.",
    "",
    incident.postmortem
  ].join("\n");
}

document.querySelector("#analyze").addEventListener("click", renderAnalysis);
document.querySelector("#copy").addEventListener("click", async () => {
  const text = [...runbook, "", document.querySelector("#postmortem").textContent].join("\n");
  await navigator.clipboard.writeText(text);
});

renderLogs();
renderAnalysis();

