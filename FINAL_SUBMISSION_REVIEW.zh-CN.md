# 最终提交复核清单

Status: review checklist ready, not submitted, not approved, not paid.
Price: H0 80,000 USD cash; UiPath AgentHack 50,000 USD cash; Splunk Agentic Ops Challenge 20,000 USD total cash and feedback awards; Sui Overflow 500,000+ USD total prize pool / track-dependent.

这个文件用于最终提交前复核。用户不要直接按 Devpost 的最终提交按钮。每个项目必须先截图给项目负责人检查。

## 通用硬性检查

- 项目名称、tagline、demo link、source code link 全部和对应项目匹配。
- Demo link 能在无登录窗口中打开。
- Source code link 指向 `https://github.com/sevencat2004/hackathon-launchpad-demos`。
- 截图不显示邮箱、token、API key、验证码、付款、税务、银行卡、私钥、助记词。
- 文案没有写成已经获奖、已经批准、已经付款、已经被官方采用。
- 状态如果页面允许写，就保持 MVP / prototype / public demo deployed，不写 submitted 或 paid。
- 如果页面问团队成员、身份、税务、付款、KYC，由用户本人处理，项目负责人只给非敏感措辞建议。

## H0 最终提交前检查

- Project name: `Zero Stack BountyOps`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/h0/`
- Screenshot: `D:\coin\hackathon-launchpad\outputs\devpost-upload-assets\01-h0-zero-stack-bountyops.png`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Must not claim: AWS production integration unless the page explicitly accepts prototype/static demo.
- Stop if Devpost requires a required AWS service field and no safe prototype answer is available.

## UiPath 最终提交前检查

- Project name: `ClaimDesk Agent`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/uipath/`
- Screenshot: `D:\coin\hackathon-launchpad\outputs\devpost-upload-assets\02-uipath-claimdesk-agent.png`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Must not claim: deployed UiPath robot or paid UiPath production automation unless the user confirms the actual UiPath surface.
- Stop if Devpost asks for UiPath workspace, tenant, robot, automation package, or account proof.

## Splunk 最终提交前检查

- Project name: `Runbook Relay Agent`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/splunk/`
- Screenshot: `D:\coin\hackathon-launchpad\outputs\devpost-upload-assets\03-splunk-runbook-relay-agent.png`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Must not claim: live Splunk Cloud integration unless the user confirms account/trial access and we add safe evidence.
- Stop if Devpost requires a Splunk tenant URL, token, app install, or live data source proof.

## Sui 后续检查

- Project name: `Sui GrantFlow Agent`
- Demo link: `https://hackathon-launchpad-demos.vercel.app/sui/`
- Screenshot: `D:\coin\hackathon-launchpad\outputs\devpost-upload-assets\04-sui-grantflow-agent.png`
- Source code: `https://github.com/sevencat2004/hackathon-launchpad-demos`
- Must not ask for or paste private key, seed phrase, recovery phrase, or wallet secret.
- If Sui proceeds, use only the user's public wallet address.

## 复核结论格式

每个项目最终提交前，项目负责人必须给出以下结论之一：

- `可以提交`: 页面字段、链接、截图、状态表述都通过。
- `需要修改`: 列出必须改的字段和替换内容。
- `先暂停`: 涉及账号、付款、KYC、token、API key、私钥、主办方强制集成证明，必须由用户确认后继续。
