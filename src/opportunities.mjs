export const opportunities = [
  {
    id: "h0-zero-stack",
    title: "H0: Hack the Zero Stack",
    platform: "Devpost",
    price: "80,000 USD cash prize pool",
    deadline: "2026-06-29 20:30 PDT",
    themeFit: 9,
    autonomy: 8,
    collectability: 6,
    timeRisk: 4,
    accountRisk: 5,
    competitionRisk: 6,
    recommendation: "primary"
  },
  {
    id: "uipath-agenthack",
    title: "UiPath AgentHack",
    platform: "Devpost / UiPath",
    price: "50,000 USD cash prize pool",
    deadline: "2026-06-29 17:00 EDT",
    themeFit: 9,
    autonomy: 7,
    collectability: 6,
    timeRisk: 4,
    accountRisk: 7,
    competitionRisk: 6,
    recommendation: "primary-after-access"
  },
  {
    id: "sui-overflow",
    title: "Sui Overflow 2026",
    platform: "Sui ecosystem",
    price: "500,000+ USD total prize pool, track-dependent",
    deadline: "2026-06-21 hackathon phase",
    themeFit: 7,
    autonomy: 6,
    collectability: 5,
    timeRisk: 6,
    accountRisk: 7,
    competitionRisk: 7,
    recommendation: "medium-term"
  },
  {
    id: "splunk-agentic-ops",
    title: "Splunk Agentic Ops Challenge",
    platform: "Devpost / Splunk",
    price: "20,000 USD total cash and feedback awards",
    deadline: "2026-06-15 23:45 PDT",
    themeFit: 8,
    autonomy: 6,
    collectability: 5,
    timeRisk: 8,
    accountRisk: 7,
    competitionRisk: 6,
    recommendation: "narrow-mvp-only"
  }
];

export function scoreOpportunity(item) {
  const positive = item.themeFit * 2 + item.autonomy * 2 + item.collectability * 2;
  const negative = item.timeRisk + item.accountRisk + item.competitionRisk;
  const score = Math.max(0, Math.min(100, Math.round(50 + positive - (negative * 1.5))));

  const reasons = [];
  if (item.themeFit >= 8) reasons.push("strong agent/product fit");
  if (item.autonomy >= 8) reasons.push("Codex can build most assets independently");
  if (item.accountRisk >= 7) reasons.push("requires user-owned platform/account steps");
  if (item.timeRisk >= 7) reasons.push("short deadline");
  if (item.collectability <= 5) reasons.push("contest judging reduces payout certainty");

  return {
    ...item,
    score,
    reasons
  };
}

export function rankedOpportunities() {
  return opportunities
    .map(scoreOpportunity)
    .sort((a, b) => b.score - a.score);
}
