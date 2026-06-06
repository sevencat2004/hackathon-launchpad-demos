# H0 Submission Draft

Status: AWS DynamoDB verified; final Devpost review pending, not submitted, not approved, not paid.
Price: 80,000 USD cash prize pool.

## Project Name

Zero Stack BountyOps

## Short Description

An agentic operations room that turns hackathon, bounty, and grant links into ranked pursuit
plans, payout-risk explanations, user-owned action lists, and submission-ready packets.

## Problem

Builders waste time chasing stale, crowded, low-collectability opportunities. A large prize
or bounty label does not mean the work is worth doing. Teams need a system that separates
buildable work from account, payment, KYC, and competition risk before implementation starts.

## Solution

Zero Stack BountyOps analyzes an opportunity, scores it by collectability and autonomy,
explains the risks, and generates a handoff packet containing next steps, required user
actions, and submission assets.

## Demo Flow

1. Enter a hackathon or bounty URL.
2. Adjust risk factors such as platform access, time pressure, and collectability.
3. Review the score and risk reasons.
4. Export a submission packet for the build team and final human submitter.

## Current Build State

The current prototype is deployed on Vercel and includes dynamic scoring controls,
generated risk reasons, exportable packet text, and verified DynamoDB-backed saved
reports through the `h0_reports` table.

## User-Owned Steps

Final Devpost submission, Vercel Team ID confirmation, tax/KYC/payment onboarding,
and later AWS cleanup when the contest is over.
