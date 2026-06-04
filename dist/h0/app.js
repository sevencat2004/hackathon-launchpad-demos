const packet = document.querySelector("#packet");
const score = document.querySelector("#score");
const recommendation = document.querySelector("#recommendation");
const summary = document.querySelector("#summary");
const reasons = document.querySelector("#reasons");
const savedReports = document.querySelector("#saved-reports");
const saveStatus = document.querySelector("#save-status");
const storageKey = "zero-stack-bountyops-reports";

const factorIds = [
  "theme-fit",
  "autonomy",
  "collectability",
  "time-risk",
  "account-risk"
];

function factor(id) {
  return Number(document.querySelector(`#${id}`).value);
}

function calculateScore(values) {
  const positive = values.themeFit * 2 + values.autonomy * 2 + values.collectability * 2;
  const negative = values.timeRisk + values.accountRisk + values.competitionRisk;
  return Math.max(0, Math.min(100, Math.round(50 + positive - negative * 1.5)));
}

function buildReasons(values) {
  const list = [];
  if (values.themeFit >= 8) list.push("Strong hackathon-theme fit: agentic full-stack product work.");
  if (values.autonomy >= 8) list.push("The team can prepare most code, docs, demo script, and export assets without waiting on extra platform access.");
  if (values.collectability <= 6) list.push("Contest judging means payout is not guaranteed even with a complete build.");
  if (values.accountRisk >= 6) list.push("User-owned account steps remain: Devpost, Vercel, AWS credits or account path, prize/KYC.");
  if (values.timeRisk >= 7) list.push("Deadline pressure is high; keep the MVP narrow.");
  if (list.length === 0) list.push("No major risk reason triggered by the current inputs.");
  return list;
}

function recommendationFor(scoreValue) {
  if (scoreValue >= 70) return "Primary build target";
  if (scoreValue >= 58) return "Build after access is clear";
  if (scoreValue >= 45) return "Keep warm, narrow the scope";
  return "Do not pursue without new evidence";
}

function currentInput() {
  return {
    url: document.querySelector("#opportunity-url").value.trim(),
    amount: document.querySelector("#amount").value.trim(),
    deadline: document.querySelector("#deadline").value.trim()
  };
}

function buildPacket() {
  const { url, amount, deadline } = currentInput();
  const values = {
    themeFit: factor("theme-fit"),
    autonomy: factor("autonomy"),
    collectability: factor("collectability"),
    timeRisk: factor("time-risk"),
    accountRisk: factor("account-risk"),
    competitionRisk: 6
  };
  const scoreValue = calculateScore(values);
  const reasonList = buildReasons(values);
  const recommendationText = recommendationFor(scoreValue);

  const text = [
    "Zero Stack BountyOps packet",
    "",
    `Opportunity: ${url}`,
    `Price: ${amount}`,
    `Deadline: ${deadline}`,
    `Score: ${scoreValue}/100`,
    `Recommendation: ${recommendationText}`,
    "Status: MVP draft, not submitted, not paid",
    "",
    "Why:",
    ...reasonList.map((item) => `- ${item}`),
    "",
    "Next build milestone:",
    "- Convert this dashboard to the deployable H0 app.",
    "- Keep saved opportunity reports working locally and through the optional DynamoDB API.",
    "- Export Devpost-ready README, screenshots, and demo script.",
    "- Connect DynamoDB only if AWS credits or an AWS account become available.",
    "",
    "User-owned steps:",
    "- Register/log in to Devpost.",
    "- Request H0 AWS credits or provide an AWS account path before final submit.",
    "- Complete final submission and prize/KYC/payment actions."
  ].join("\n");

  packet.textContent = text;
  score.textContent = String(scoreValue);
  recommendation.textContent = recommendationText;
  summary.textContent = `${amount} with deadline ${deadline}. Keep H0 as a draft until AWS credits or an account path is available.`;
  reasons.innerHTML = reasonList.map((item) => `<li>${item}</li>`).join("");
  return { url, amount, deadline, scoreValue, recommendationText, text };
}

function readSavedReports() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function writeSavedReports(items) {
  localStorage.setItem(storageKey, JSON.stringify(items.slice(0, 6)));
}

function renderSavedReports() {
  const items = readSavedReports();
  if (items.length === 0) {
    savedReports.innerHTML = '<p class="empty-state">No saved reports yet.</p>';
    return;
  }

  savedReports.innerHTML = items
    .map(
      (item) => `<article class="saved-card"><strong>${item.title}</strong><span>${item.score}/100 - ${item.backend || "local"} - ${item.createdAt}</span></article>`
    )
    .join("");
}

async function saveReportToCloud(result) {
  const response = await fetch("/api/h0-reports", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(result)
  });
  return response.json();
}

async function saveCurrentReport() {
  const result = buildPacket();
  const item = {
    title: result.url || "Untitled opportunity",
    score: result.scoreValue,
    packet: result.text,
    createdAt: new Date().toISOString(),
    backend: "local"
  };

  try {
    const cloudResult = await saveReportToCloud(result);
    if (cloudResult.ok && cloudResult.stored) {
      writeSavedReports([{ ...item, backend: "dynamodb", reportId: cloudResult.reportId }, ...readSavedReports()]);
      saveStatus.textContent = `Saved to DynamoDB table ${cloudResult.table}.`;
      renderSavedReports();
      return;
    }
    saveStatus.textContent = "Saved locally. DynamoDB is not configured yet.";
  } catch {
    saveStatus.textContent = "Saved locally. Cloud write is unavailable in this preview.";
  }

  writeSavedReports([item, ...readSavedReports()]);
  renderSavedReports();
}

function downloadCurrentReport() {
  const result = buildPacket();
  const blob = new Blob([result.text], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "zero-stack-bountyops-packet.md";
  link.click();
  URL.revokeObjectURL(url);
}

for (const id of factorIds) {
  const input = document.querySelector(`#${id}`);
  const output = document.querySelector(`#${id}-output`);
  input.addEventListener("input", () => {
    output.textContent = input.value;
    buildPacket();
  });
}

document.querySelector("#analyze").addEventListener("click", buildPacket);
document.querySelector("#save").addEventListener("click", saveCurrentReport);
document.querySelector("#download").addEventListener("click", downloadCurrentReport);
document.querySelector("#clear-saved").addEventListener("click", () => {
  writeSavedReports([]);
  renderSavedReports();
});
document.querySelector("#copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(packet.textContent);
});

buildPacket();
renderSavedReports();
