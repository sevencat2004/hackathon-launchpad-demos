const milestones = [
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
];

function renderMilestones() {
  document.querySelector("#milestones").innerHTML = milestones
    .map(
      (item) =>
        `<article class="milestone"><strong>${item.name}</strong><span>${item.deliverable}</span><span>Acceptance: ${item.acceptance}</span></article>`
    )
    .join("");
}

function buildPacket() {
  const address = document.querySelector("#public-address").value.trim();
  const safetyNote =
    "Use a public Sui address only. Do not share private keys, seed phrases, recovery phrases, or one-time codes.";
  document.querySelector("#safety-note").textContent = safetyNote;

  document.querySelector("#packet").textContent = [
    "Sui GrantFlow Agent reviewer packet",
    "",
    "Status: MVP draft, not submitted, not paid.",
    "Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.",
    `Public address placeholder: ${address}`,
    "",
    "Milestones:",
    ...milestones.map(
      (item) => `- ${item.name}: ${item.deliverable}; acceptance: ${item.acceptance}`
    ),
    "",
    "Safety:",
    `- ${safetyNote}`,
    "",
    "Next technical choice:",
    "- Decide whether this submission should use Sui SDK only or include a Move package."
  ].join("\n");
}

document.querySelector("#generate").addEventListener("click", () => {
  renderMilestones();
  buildPacket();
});
document.querySelector("#public-address").addEventListener("input", buildPacket);
document.querySelector("#copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.querySelector("#packet").textContent);
});

renderMilestones();
buildPacket();

