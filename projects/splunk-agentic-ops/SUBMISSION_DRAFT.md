# Splunk Agentic Ops Submission Draft

Status: submitted to Splunk Agentic Ops Hackathon, not approved, not paid.
Price: 20,000 USD total cash and feedback awards.

## Project Name

Runbook Relay Agent

## Short Description

An agentic incident assistant that turns raw service logs into likely root cause, runbook
steps, operator handoff, and postmortem draft.

## Problem

Ops teams often lose time translating logs into a concise action plan. During an incident,
raw events, latency spikes, provider errors, and customer-impact notes need to become a
clear runbook fast.

## Solution

Runbook Relay Agent reads incident events, detects anomaly signals, maps them to a runbook,
and produces a human-readable incident summary and postmortem draft.

## Demo Flow

1. Load synthetic checkout logs.
2. Detect timeout, retry, and circuit-breaker signals.
3. Produce severity and probable cause.
4. Generate runbook actions and postmortem text.

## Current Build State

The first prototype includes synthetic logs and a runnable incident analyzer. Next step is
connecting the same flow to Splunk data once account/trial access is available.

## User-Owned Steps

Devpost submission, Splunk account/trial access, safe local token setup if live integration
is used, tax/KYC/payment onboarding.
