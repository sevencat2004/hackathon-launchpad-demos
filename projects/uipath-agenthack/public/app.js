const inbox = [
  {
    source: "Devpost",
    title: "H0: Hack the Zero Stack",
    amount: "80,000 USD cash prize pool",
    action: "route to build queue"
  },
  {
    source: "Devpost",
    title: "UiPath AgentHack",
    amount: "50,000 USD cash prize pool",
    action: "wait for UiPath access confirmation"
  },
  {
    source: "Devpost",
    title: "Splunk Agentic Ops Challenge",
    amount: "20,000 USD total cash and feedback awards",
    action: "build narrow synthetic-log demo"
  }
];

function route(item, index) {
  const wait = item.action.includes("wait");
  return {
    rank: index + 1,
    lane: wait ? "wait" : "build",
    approval: "human approval required",
    ...item
  };
}

function renderInbox() {
  document.querySelector("#inbox").innerHTML = inbox
    .map(
      (item) =>
        `<article class="card"><strong>${item.title}</strong><span>${item.source}</span><span>${item.amount}</span></article>`
    )
    .join("");
}

function renderQueue() {
  const queue = inbox.map(route);
  document.querySelector("#queue").innerHTML = queue
    .map(
      (item) =>
        `<article class="card ${item.lane}"><strong>#${item.rank} ${item.title}</strong><span>${item.action}</span><span>${item.approval}</span></article>`
    )
    .join("");

  document.querySelector("#packet").textContent = [
    "ClaimDesk Agent automation packet",
    "",
    "Status: submitted to UiPath AgentHack, not approved, not paid.",
    "Price: 50,000 USD cash prize pool.",
    "",
    "Queue:",
    ...queue.map((item) => `- #${item.rank} ${item.title}: ${item.action}; ${item.approval}`),
    "",
    "User-owned gates:",
    "- Devpost project creation and final submission.",
    "- UiPath account login and platform selection.",
    "- Tax, KYC, prize, and payment onboarding."
  ].join("\n");
}

document.querySelector("#route").addEventListener("click", renderQueue);
document.querySelector("#copy").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.querySelector("#packet").textContent);
});

renderInbox();
renderQueue();
