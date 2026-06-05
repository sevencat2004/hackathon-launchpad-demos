import { isValidSuiAddress, normalizeSuiAddress } from "@mysten/sui/utils";
import { fileURLToPath } from "node:url";

export function buildSuiPaymentIntent({
  recipient = "0xPUBLIC_ADDRESS_ONLY",
  amountMist = "1000000000",
  milestone = "Milestone 1 reviewer approval",
  memo = "GrantFlow payment intent demo"
} = {}) {
  const hasAddress = recipient && recipient !== "0xPUBLIC_ADDRESS_ONLY";
  const validRecipient = hasAddress && isValidSuiAddress(recipient);
  const normalizedRecipient = validRecipient ? normalizeSuiAddress(recipient) : null;

  return {
    status: "dry-run intent, not signed, project page created, not approved, not paid",
    network: "Sui testnet-ready model",
    asset: "SUI",
    amountMist,
    amountSui: Number(amountMist) / 1_000_000_000,
    recipient: normalizedRecipient ?? recipient,
    validRecipient,
    milestone,
    memo,
    safety: [
      "Uses public address only.",
      "Does not request or store private keys, seed phrases, recovery phrases, or one-time codes.",
      "Does not sign or broadcast a transaction in this prototype."
    ]
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const recipient = process.argv[2] ?? "0xPUBLIC_ADDRESS_ONLY";
  console.log(JSON.stringify(buildSuiPaymentIntent({ recipient }), null, 2));
}
