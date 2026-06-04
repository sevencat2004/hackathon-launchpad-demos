# UiPath AgentHack Submission Draft

Status: MVP draft, not submitted, not paid.
Price: 50,000 USD cash prize pool.

## Project Name

ClaimDesk Agent

## Short Description

An automation agent that triages bounty, grant, support, and hackathon opportunities into a
ranked queue with human approval gates.

## Problem

Opportunity intake is messy: messages, links, prize pages, issue comments, duplicate claims,
account requirements, and payout rules are scattered across different systems. Blindly
starting work creates wasted effort and low payout odds.

## Solution

ClaimDesk Agent extracts the key facts, identifies user-owned steps, detects payout risk,
and routes opportunities into build, wait, or reject queues. It is designed for human-in-the-
loop automation where the agent prepares work but the user controls submissions, accounts,
and payment actions.

## Demo Flow

1. Load an opportunity inbox.
2. Classify each item by amount, platform, and next action.
3. Generate a queue for human approval.
4. Prepare response and submission packet drafts.

## Current Build State

The first prototype includes a JSON opportunity inbox and queue demo. Next step is mapping
the queue to the available UiPath surface after platform access is confirmed.

## User-Owned Steps

Devpost submission, UiPath account/platform access, tax/KYC/payment onboarding.

