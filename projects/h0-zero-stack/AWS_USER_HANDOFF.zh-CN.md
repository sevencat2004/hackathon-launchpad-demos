# H0 AWS 用户交接清单

Status: credits approved, pending user redemption; draft-only until AWS database evidence exists, not approved, not paid.
Price: 80,000 USD cash prize pool.

## 当前判断

H0 不能现在最终提交。

原因很直接：官方要求项目使用 AWS Database 作为后端，并在提交时提供 AWS Database 使用证据。你已经确认目前没有 AWS 账号，所以我们不能诚实地勾选或声称已经接入 DynamoDB/Aurora。

当前可以保留为草稿：

```text
Zero Stack BountyOps
```

但不要最终提交。

## 官方需要的东西

H0 官方页面要求提交材料包括：

- 文字描述：说明用了哪个 AWS Database
- 3-5 分钟 demo video：要展示应用、说明问题、说明使用的 AWS Database
- Published Vercel Project Link
- Vercel Team ID
- Architecture Diagram：展示应用如何连接后端组件
- Storage Configuration screenshot：证明 AWS Database 使用情况

推荐数据库：

```text
Amazon DynamoDB
```

原因：

- 当前 H0 应用只需要保存机会评估报告，DynamoDB 足够。
- 不需要复杂数据库迁移。
- 费用和配置风险比 Aurora / Aurora DSQL 更低。
- 代码里已经准备了 DynamoDB-compatible API route。

## 你后面如果拿到 AWS 账号，需要做什么

只做账号层面的事，不要把密钥发给我。

### 第一步：确认 AWS 路线

优先顺序：

1. 通过 H0 官方流程申请 AWS promotional credits。
2. 如果你已有安全 AWS 账号，确认可以创建一个小 DynamoDB table。
3. 如果没有 credits，不建议为了 H0 盲目开通可能产生费用的 AWS 服务。

### 第二步：创建 DynamoDB table

建议表名：

```text
h0_reports
```

Partition key：

```text
id
```

类型：

```text
String
```

推荐 region：

```text
us-east-1
```

计费/容量：

```text
On-demand
```

### 第三步：创建最小权限 IAM 用户或 access key

不要用 root 账号 key。

权限只允许访问这张表，策略模板如下。把 `<AWS_ACCOUNT_ID>` 替换成你的 AWS account id：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem",
        "dynamodb:GetItem",
        "dynamodb:Query",
        "dynamodb:Scan"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:<AWS_ACCOUNT_ID>:table/h0_reports"
    }
  ]
}
```

### 第四步：只在 Vercel 填环境变量

不要在聊天里发这些值。

Vercel Environment Variables：

```text
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=<只填在 Vercel>
AWS_SECRET_ACCESS_KEY=<只填在 Vercel>
H0_REPORTS_TABLE=h0_reports
```

### 第五步：重新部署 Vercel

填完环境变量后，在 Vercel 重新 deploy。

然后打开：

```text
https://hackathon-launchpad-demos.vercel.app/h0/
```

保存一条报告，确认不再只是本地保存。

## 需要截哪些图

提交前需要你或我指导你截图：

1. DynamoDB table 页面，能看到 `h0_reports`。
2. DynamoDB table 的 key schema，能看到 `id`。
3. Vercel Environment Variables 页面，密钥值隐藏，只露变量名。
4. H0 页面保存报告成功的画面。
5. 架构图页面或 `architecture_diagram.md`。

## Demo 视频需要怎么改

如果 AWS 接好，现有视频需要重新录一版，重点说：

```text
Zero Stack BountyOps uses Amazon DynamoDB as the primary backend for saved opportunity reports. Vercel serves the front end and API route, while DynamoDB stores the structured report records.
```

不要说：

```text
AWS is simulated
```

除非我们仍然没有接真实 AWS。

## 不能做的事

不要：

- 发 AWS secret access key 给我
- 发 root 账号密码
- 发验证码
- 发银行卡或税务信息
- 在没有 AWS 截图时最终提交 H0
- 声称 DynamoDB 已接入，除非真实测试成功

## 当前结论

H0 现在状态是：

```text
draft-only-until-aws
```

你拿到 AWS 账号或 credits 后，只需要告诉我：

```text
AWS 可以用了
```

然后我会指挥你一步一步创建表、填 Vercel 环境变量、截图、重新提交前检查。
