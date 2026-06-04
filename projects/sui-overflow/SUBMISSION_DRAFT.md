# Sui Overflow Submission Draft

Status: MVP draft, not submitted, not paid.
Price: 500,000+ USD total prize pool shown by official Sui Overflow materials; award is track-dependent.

## Project Name

Sui GrantFlow Agent

## Short Description

A Sui-focused milestone and payment handoff assistant for builders, grants, and bounties.

## Problem

Web3 project funding often mixes technical milestones, wallet actions, review criteria, and
payment steps. Builders need a safe way to plan scope and payment handoffs without exposing
private keys or confusing public wallet addresses with secrets.

## Solution

Sui GrantFlow Agent converts a project idea into milestones, acceptance criteria, wallet-safe
action lists, and dry-run SUI payment intent artifacts.

## Track Fit

Primary track: Agentic Web.

The project is an agent-style workflow tool for Sui builders. It prepares milestone plans,
review packets, wallet-safe handoff steps, and a Sui SDK-backed public-address check while
keeping private wallet material out of the submission flow.

Secondary angle: DeFi & Payments, because the demo now includes a dry-run SUI payment intent.
It is not a live transfer or escrow product.

## Demo Flow

1. Define the project goal.
2. Generate milestone deliverables and acceptance criteria.
3. Validate public-address format and produce wallet-safe payment handoff text.
4. Generate a dry-run SUI payment intent.
5. Export a reviewer packet.

## Current Build State

The first prototype includes a milestone model, wallet-safety demo, `@mysten/sui` address
validation, and a dry-run payment intent model. Track decision is Agentic Web because the
main product is still an agentic planning and handoff workflow.

## User-Owned Steps

Sui Overflow submission, Sui wallet creation/confirmation, public wallet address only,
tax/KYC/payment onboarding if selected.
