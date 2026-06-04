# Devpost 下一步操作包

Status: ready for draft project creation, not finally submitted, not approved, not paid.
Price: H0 80,000 USD cash; UiPath AgentHack 50,000 USD cash; Splunk Agentic Ops Challenge 20,000 USD total cash and feedback awards; Sui Overflow 500,000+ USD total prize pool / track-dependent.

2026-06-04 update: 用户确认当前没有 AWS 账号。H0 只能先建草稿，不能最终提交；Devpost 草稿优先级调整为 UiPath 第一、Splunk 第二、H0 草稿第三。H0 最终提交必须等 AWS promotional credits 或可用 AWS 账号路径。

这个文件给用户在 Devpost 页面创建项目草稿时使用。不要直接最终提交。每个项目创建到提交前检查页后，先截图给项目负责人复核。

## 通用链接

- GitHub repo: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Public demo hub: `https://hackathon-launchpad-demos.vercel.app`
- H0 demo: `https://hackathon-launchpad-demos.vercel.app/h0/`
- UiPath demo: `https://hackathon-launchpad-demos.vercel.app/uipath/`
- Splunk demo: `https://hackathon-launchpad-demos.vercel.app/splunk/`
- Sui demo: `https://hackathon-launchpad-demos.vercel.app/sui/`

## 先做顺序

1. H0: Hack the Zero Stack
2. UiPath AgentHack
3. Splunk Agentic Ops Challenge
4. Sui Overflow 后置，不走这一轮 Devpost 三连填表节奏

原因：H0 分数最高，UiPath 第二，Splunk 截止时间更近但 demo 较窄。Sui 需要先决定 track 和是否补 Sui SDK / Move 内容。

## H0 填表包

- Project name: `Zero Stack BountyOps`
- Tagline: `A planning desk for deciding which hackathons, bounties, and grants are actually worth building.`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/h0/`
- Source code link: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML`, `CSS`, `JavaScript`, `Node.js`
- Status: MVP draft, public demo deployed, not submitted, not paid. H0 final submission is blocked because the user currently has no AWS account and still needs AWS database evidence.

### H0 重要阻断点

H0 可以先创建 Devpost 草稿页，但不要最终提交。

官方规则要求项目使用至少一个 AWS database 作为 primary backend，范围包括 Aurora、Aurora DSQL 或 DynamoDB。我们当前公开 demo 还是静态原型，最终提交前必须补 AWS 数据库集成、AWS 使用截图、架构图、Vercel 项目链接、Vercel Team ID 和 demo video。

如果页面问 AWS database / Aurora / DynamoDB / architecture / Vercel Team ID，先停，截图给项目负责人，不要自己编。

### H0 short description

Zero Stack BountyOps helps a builder slow down before committing days of work. Paste or describe an opportunity, adjust practical risk factors, and the app gives a pursuit score, plain reasons, and a packet that separates build tasks from account, payment, and submission steps.

### H0 long description

The first problem this project solves is not coding. It is choosing. Prize pages often look simple, but the hidden work is scattered across deadlines, platform access, review rules, duplicated submissions, KYC, payout risk, and manual final clicks.

Zero Stack BountyOps turns that messy first hour into a visible workflow. The dashboard scores an opportunity across theme fit, autonomy, collectability, time pressure, and account risk. It then explains why the score moved and generates a handoff packet that a team can use before starting implementation.

The current build is intentionally practical: a browser dashboard, adjustable controls, local saved reports, Markdown export, and a static deployment that reviewers can open without credentials.

### H0 screenshots

- Upload `D:\coin\hackathon-launchpad\outputs\screenshots\h0.png` if Devpost asks for images.
- If Devpost accepts only browser upload, use the screenshot you just captured from the public `/h0/` page.

## UiPath 填表包

- Project name: `ClaimDesk Agent`
- Tagline: `A human approval queue for messy opportunity inboxes.`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/uipath/`
- Source code link: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML`, `CSS`, `JavaScript`, `JSON`, `Node.js`
- Status: MVP draft, public demo deployed, not submitted, not paid.

### UiPath short description

ClaimDesk Agent takes an inbox of bounty, grant, and hackathon leads and routes each item into a ranked queue. The prototype keeps human approval in the loop for accounts, submissions, and payment steps while letting automation prepare the repetitive triage work.

### UiPath long description

Most opportunity work starts as fragments: a link in chat, a prize page, a GitHub issue, a comment thread, a platform login, and a payout rule that might be easy to miss. ClaimDesk Agent treats that intake as a queue instead of a scramble.

The demo shows opportunity items moving through intake, extraction, routing, approval, and packet generation. It is built as a UiPath friendly workflow map: the agent can prepare facts and drafts, but the user still controls account authorization, final submission, and payment onboarding.

The current version uses a static dashboard and a small JSON inbox so reviewers can see the flow immediately. After platform access is confirmed, the same stages can be mapped into Studio, Studio Web, Automation Cloud, or Labs.

### UiPath screenshots

- Upload `D:\coin\hackathon-launchpad\outputs\screenshots\uipath.png` if Devpost asks for images.
- If Devpost asks which UiPath product is used and requires a real UiPath environment, stop and send a screenshot for review before answering.

## Splunk 填表包

- Project name: `Runbook Relay Agent`
- Tagline: `From noisy checkout logs to a runbook an operator can use.`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/splunk/`
- Source code link: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Built with: `HTML`, `CSS`, `JavaScript`, `Synthetic logs`, `Node.js`
- Status: MVP draft, public demo deployed, not submitted, not paid.

### Splunk short description

Runbook Relay Agent reads synthetic checkout service events, detects incident signals, and turns them into a severity summary, likely cause, runbook steps, and a postmortem draft.

### Splunk long description

Incidents do not usually arrive as neat summaries. They arrive as log lines, retries, timeouts, provider errors, and half-written notes from people trying to keep the service alive.

Runbook Relay Agent demonstrates a narrow version of the operator workflow. It reads checkout events, surfaces the signals that matter, explains the probable cause, and writes the next steps in language a responder can act on. The dashboard also drafts a postmortem so the handoff does not get lost after the incident ends.

This first build uses synthetic data because it is safe to show publicly. Once Splunk account access is available, the same analysis shape can be connected to Splunk search results or exported incidents.

### Splunk screenshots

- Upload `D:\coin\hackathon-launchpad\outputs\screenshots\splunk.png` if Devpost asks for images.
- If Devpost requires proof of a real Splunk account, stop and send a screenshot for review before answering.

## 你在页面上遇到这些情况时先停

- 页面要求付款、信用卡、升级 Pro、税务、KYC、银行卡。
- 页面要求 OAuth、API key、token、一次性验证码。
- 页面要求说明 AWS / UiPath / Splunk 的真实账号集成程度。
- H0 页面要求 AWS database 使用截图、架构图、Vercel Team ID、Aurora、Aurora DSQL、DynamoDB。
- 页面出现 final submit / submit project / complete submission 之类最终提交按钮。
- 页面要求上传视频，但没有跳过选项。

遇到以上情况，截图发给项目负责人复核，不要自己硬填。

## 最终提交前检查

每个项目最终提交前必须确认：

- Project name 和 demo link 匹配。
- Source code 指向 GitHub repo。
- 截图没有显示私人邮箱、token、验证码、付款信息。
- 描述没有承诺已经中奖、已经付款、已经被批准。
- 状态仍然明确为 not submitted / not paid，直到真正提交成功后再更新记录。
