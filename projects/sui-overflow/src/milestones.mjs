const project = {
  status: "first-stage prototype, not submitted, not paid",
  price: "500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent",
  title: "Sui GrantFlow Agent",
  publicWalletOnly: true,
  milestones: [
    {
      name: "Discovery packet",
      deliverable: "ranked opportunity and payment-risk report",
      acceptance: "reviewer can inspect score reasons and user-owned actions"
    },
    {
      name: "Milestone agreement",
      deliverable: "scope, review terms, and payout checklist",
      acceptance: "no private keys or seed phrases are requested"
    },
    {
      name: "Payment intent simulation",
      deliverable: "Sui wallet-safe payment handoff",
      acceptance: "only public address is used in the demo"
    }
  ]
};

console.log(JSON.stringify(project, null, 2));

