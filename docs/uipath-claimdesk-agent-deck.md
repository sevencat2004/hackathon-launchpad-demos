# ClaimDesk Agent

Status: UiPath AgentHack draft, not submitted, not approved, not paid.
Price: 50,000 USD cash prize pool.

## 1. Project summary

ClaimDesk Agent helps a team sort messy opportunity leads before committing work.

The project takes bounty, grant, support, and hackathon leads and turns them into a review queue. Each item gets a practical next step, a risk note, and a short packet a person can approve before moving forward.

Demo: https://hackathon-launchpad-demos.vercel.app/uipath/

Code: https://github.com/sevencat2004/hackathon-launchpad-demos

## 2. The problem

Opportunity work usually starts in a messy way.

A link shows up in chat. A prize page says one thing. A forum post says another. The real blocker might be a login, a payout rule, a team requirement, or a deadline that is closer than it looks.

It is easy to start building because the prize looks attractive, then discover too late that the submission path is not ready.

## 3. What ClaimDesk does

ClaimDesk Agent turns that early mess into a queue.

It checks:

- visible prize and deadline
- platform and account requirements
- payout and submission risk
- next action for the team
- whether a human needs to approve the step

The output is a ranked queue plus a short handoff packet.

## 4. Where UiPath fits

The workflow is designed around a UiPath style automation process:

- intake
- fact extraction
- queue routing
- human approval
- packet generation

The demo keeps the user in control of accounts, final submission, and payment steps. That matters because this type of work touches logins, eligibility rules, and prize onboarding.

## 5. Current prototype

The current prototype is a browser based demo with:

- a sample opportunity inbox
- automation stages
- a ranked review queue
- approval gates
- generated automation packets
- a public demo page and public repository

The sample data keeps the demo safe to review without exposing private accounts or payout details.

## 6. What we learned

The useful part of this agent is not the most dramatic part.

The value is in slowing down the first decision, making risks visible, and helping a team avoid wasted build time. A good automation workflow should also know when to stop and ask for human approval.

That became the main design rule for this project.

## 7. Next steps

Next, we would connect the queue to the available UiPath surface and replace the fixture inbox with real intake sources.

We would also add:

- saved reviewer decisions
- comments on each queue item
- cleaner handoff packets
- richer integrations for teams managing several opportunities at once

## 8. Submission status

This is a draft submission package.

The public demo, source repository, screenshot asset, and project story are ready for review. Final submission still depends on user-owned Devpost and UiPath account steps.
