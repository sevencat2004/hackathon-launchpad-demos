# Sui 最终提交字段复查包

状态：字段包已准备，尚未提交，尚未获奖，尚未付款。
金额：Sui Overflow 2026 总奖池 1,000,000+ USD，赛道奖金 500,000+ USD；实际奖金取决于赛道和评审结果。

这个文件只用于最终提交前复核。不要把私钥、助记词、recovery phrase、钱包密码、验证码、税务、KYC 或银行卡信息发给我。

## 当前结论

Sui GrantFlow Agent 可以作为 `Agentic Web` 项目提交。它不是主网支付产品，也不要说已经 mainnet deployed。当前真实能力是：

- Sui-aware milestone and grant handoff workflow
- public Sui address validation
- dry-run SUI payment intent
- reviewer packet generation
- no signing, no wallet custody, no live transfer

## 可直接粘贴的短字段

Project name:

```text
Sui GrantFlow Agent
```

Track:

```text
Agentic Web
```

Short description:

```text
A milestone and wallet-safe handoff assistant for Sui builders preparing grants, bounties, and hackathon submissions.
```

One-line pitch:

```text
Sui GrantFlow Agent turns a project idea into reviewable milestones, public-address-only payment handoffs, and a dry-run SUI intent without asking for wallet secrets.
```

Demo:

```text
https://hackathon-launchpad-demos.vercel.app/sui/
```

Repository:

```text
https://github.com/sevencat2004/hackathon-launchpad-demos
```

Video:

```text
Paste the YouTube link after uploading D:\coin\hackathon-launchpad\outputs\sui-grantflow-agent-demo.mp4
```

Built with:

```text
HTML, CSS, JavaScript, Node.js, @mysten/sui, Sui address validation, dry-run SUI payment intent
```

Contribution:

```text
I designed and built the prototype end to end: the browser demo, milestone model, wallet-safety flow, Sui address validation proof, dry-run payment intent, reviewer packet output, documentation, screenshots, and demo video.
```

## 项目介绍短版

如果表单只给一小段空间，用这一版：

```text
Sui GrantFlow Agent helps builders turn a grant, bounty, or hackathon idea into a reviewer-ready packet. It creates milestones, acceptance criteria, wallet-safe payment notes, and a dry-run SUI payment intent. The prototype uses @mysten/sui for public address validation and keeps the custody boundary clear: public address only, no private keys, no recovery phrases, no signing, and no live transfer.
```

## 项目介绍长版

如果表单给较长文本框，用这一版：

```text
I built Sui GrantFlow Agent around a practical problem: a good Sui project still needs milestones, review terms, wallet details, and a clean handoff before funding can move forward. That handoff gets risky if a tool asks for the wrong thing, so the safety boundary is visible from the first screen: public address only.

The demo helps a builder turn a project idea into a reviewer-ready packet. It creates milestone deliverables, acceptance criteria, wallet-safe payment notes, and a dry-run SUI payment intent. The Sui-specific proof uses @mysten/sui for public address validation and models SUI amounts without signing or broadcasting a live transaction.

For this submission, the project is best placed in Agentic Web. The agentic workflow prepares milestones, handoff text, and reviewer packets for Sui builders. Payment support is part of the workflow, but the prototype does not pretend to be a live DeFi product or mainnet escrow.
```

## 评审问题回答

What makes it Sui-specific?

```text
The prototype uses @mysten/sui for public address validation, models SUI amounts in MIST/SUI, and builds a dry-run SUI payment intent that can be reviewed without wallet custody. It is designed around the Sui builder workflow: milestones, reviewer handoff, and safe public-address-only payment preparation.
```

Why Agentic Web?

```text
The core product is an autonomous workflow assistant for Sui builders. It prepares milestones, payment handoff text, and reviewer packets while using Sui-aware address validation. The payment feature supports the workflow, but the project is not a live DeFi product yet.
```

What is next?

```text
Next I would connect the handoff to a Sui wallet adapter, add a Move package for milestone receipts, and let teams export signed milestone approvals after they choose to connect a wallet. I would also add mainnet deployment evidence if the project advances after the hackathon.
```

## 钱包字段规则

如果表单要求钱包，只填你的 public Sui address，通常是 `0x...`。

不要填、不要发、不要截图给我：

- private key
- seed phrase
- recovery phrase
- mnemonic phrase
- wallet password
- one-time code
- exchange login
- tax ID
- bank details

## 最终提交前暂停点

页面出现这些按钮或字段时，先截图给我复核：

- `Review`
- `Submit`
- `Finalize`
- `Confirm`
- wallet address
- mainnet deployment
- prize payment
- tax / KYC
- team identity

我复核通过后，再点最终提交。
