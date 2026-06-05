import { rankedOpportunities } from "../../../src/opportunities.mjs";

const payload = {
  status: "credits requested; draft-only until AWS database evidence exists, not approved, not paid",
  price: "80,000 USD cash prize pool",
  product: "Zero Stack BountyOps",
  primaryFlow: "analyze opportunity, rank pursuit risk, export submission packet",
  rankedTracks: rankedOpportunities().map((item) => ({
    id: item.id,
    title: item.title,
    score: item.score,
    recommendation: item.recommendation
  }))
};

console.log(JSON.stringify(payload, null, 2));
