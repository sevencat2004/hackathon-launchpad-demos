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

function isLikelySuiAddress(address) {
  return /^0x[0-9a-fA-F]{64}$/.test(address.trim());
}

function buildIntent(address) {
  const validRecipient = isLikelySuiAddress(address);
  return {
    status: "dry-run intent, not signed, not submitted, not paid",
    network: "Sui testnet-ready model",
    asset: "SUI",
    amountMist: "1000000000",
    amountSui: 1,
    recipient: address,
    validRecipient,
    milestone: "Milestone 1 reviewer approval",
    memo: "GrantFlow payment intent demo",
    safety: [
      "Uses public address only.",
      "Does not request or store private keys, seed phrases, recovery phrases, or one-time codes.",
      "Does not sign or broadcast a transaction in this prototype."
    ]
  };
}

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
  const intent = buildIntent(address);
  const safetyNote =
    "Use a public Sui address only. Do not share private keys, seed phrases, recovery phrases, or one-time codes.";
  document.querySelector("#safety-note").textContent = safetyNote;
  document.querySelector("#address-status").textContent = intent.validRecipient
    ? "Address format looks valid for a Sui public address."
    : "Demo placeholder or invalid format. Paste only a public 0x Sui address when ready.";
  document.querySelector("#address-status").dataset.valid = String(intent.validRecipient);

  document.querySelector("#packet").textContent = [
    "Sui GrantFlow Agent reviewer packet",
    "",
    "Status: MVP draft, not submitted, not paid.",
    "Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.",
    `Public address: ${address}`,
    `Address format valid: ${intent.validRecipient ? "yes" : "no / placeholder"}`,
    "",
    "Milestones:",
    ...milestones.map(
      (item) => `- ${item.name}: ${item.deliverable}; acceptance: ${item.acceptance}`
    ),
    "",
    "Sui payment intent:",
    `- Network: ${intent.network}`,
    `- Asset: ${intent.asset}`,
    `- Amount: ${intent.amountSui} SUI (${intent.amountMist} MIST)`,
    `- Recipient: ${intent.recipient}`,
    `- Status: ${intent.status}`,
    "",
    "Safety:",
    ...intent.safety.map((item) => `- ${item}`),
    "",
    "Track:",
    "- Primary: Agentic Web.",
    "- Secondary: DeFi & Payments as a payment-handoff demo, not a live transfer flow.",
    "",
    "Current technical evidence:",
    "- CLI uses @mysten/sui for Sui address validation and payment intent modeling.",
    "- Browser demo keeps the same public-address-only boundary for reviewers."
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
