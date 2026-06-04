# Runbook Relay Agent

Status: Splunk Agentic Ops Hackathon draft, not submitted, not approved, not paid.
Price: 20,000 USD total cash and feedback awards.

## 1. Project summary

Runbook Relay Agent is a small incident assistant for noisy service logs.

It reads a stream of synthetic checkout events, groups the signals that matter, and turns them into runbook steps an operator can review.

Demo: https://hackathon-launchpad-demos.vercel.app/splunk/

Code: https://github.com/sevencat2004/hackathon-launchpad-demos

## 2. The problem

Incidents rarely arrive as neat summaries.

They arrive as log lines, retries, timeouts, provider errors, and partial notes from people trying to keep the service alive. The person on call still has to decide what matters first.

That first pass should be calmer.

## 3. What it does

Runbook Relay Agent turns synthetic service logs into:

- severity and service summaries
- signal counters
- probable cause text
- runbook steps
- a short postmortem draft

The operator still decides what to run and when to escalate.

## 4. Where Splunk fits

The prototype is shaped around a Splunk workflow:

- collect service events
- detect patterns
- explain the likely issue
- suggest runbook actions
- preserve a review note after the incident

The current version uses synthetic logs so the demo can be reviewed without exposing a private environment.

## 5. Current prototype

The prototype includes:

- a browser based dashboard
- synthetic checkout logs
- severity and latency signals
- runbook recommendations
- postmortem draft output
- a public demo page and public repository

## 6. What we learned

Good incident tooling should be plain spoken.

During an incident, the useful output is not a dramatic story. It is a short explanation, a clean queue, and the next step an operator can trust enough to check.

That became the main design rule for this demo.

## 7. Next steps

Next, we would connect the workflow to a real Splunk environment and replace the synthetic fixture with live or replayed events.

We would also add saved incident reviews, service ownership mapping, and team-specific runbook templates.

## 8. Submission status

This is a draft submission package.

The public demo, source repository, screenshot asset, deck, and video asset are being prepared for Devpost submission. Final submission still depends on user-owned Devpost and any Splunk account steps.
