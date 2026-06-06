const crypto = require("node:crypto");

const service = "dynamodb";
const algorithm = "AWS4-HMAC-SHA256";

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(body));
}

function hmac(key, value, encoding) {
  return crypto.createHmac("sha256", key).update(value, "utf8").digest(encoding);
}

function hash(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex");
}

function signingKey(secretAccessKey, dateStamp, region) {
  const dateKey = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const regionKey = hmac(dateKey, region);
  const serviceKey = hmac(regionKey, service);
  return hmac(serviceKey, "aws4_request");
}

function cleanText(value, fallback = "") {
  return String(value || fallback).trim().slice(0, 4000);
}

function numberText(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? String(numeric) : String(fallback);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}

async function putReport(report) {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const sessionToken = process.env.AWS_SESSION_TOKEN;
  const tableName = process.env.H0_REPORTS_TABLE;

  if (!region || !accessKeyId || !secretAccessKey || !tableName) {
    return {
      stored: false,
      reason: "missing_aws_environment",
      message: "AWS DynamoDB environment variables are not configured."
    };
  }

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);
  const host = `dynamodb.${region}.amazonaws.com`;
  const endpoint = `https://${host}/`;
  const reportId = crypto.randomUUID();

  const payload = JSON.stringify({
    TableName: tableName,
    Item: {
      id: { S: reportId },
      title: { S: cleanText(report.url, "Untitled opportunity").slice(0, 300) },
      url: { S: cleanText(report.url).slice(0, 1000) },
      amount: { S: cleanText(report.amount).slice(0, 200) },
      deadline: { S: cleanText(report.deadline).slice(0, 200) },
      score: { N: numberText(report.scoreValue) },
      recommendation: { S: cleanText(report.recommendationText).slice(0, 200) },
      packet: { S: cleanText(report.text) },
      createdAt: { S: now.toISOString() },
      source: { S: "zero-stack-bountyops" }
    }
  });

  const headers = {
    "content-type": "application/x-amz-json-1.0",
    host,
    "x-amz-date": amzDate,
    "x-amz-target": "DynamoDB_20120810.PutItem"
  };
  if (sessionToken) headers["x-amz-security-token"] = sessionToken;

  const signedHeaderKeys = Object.keys(headers).sort();
  const canonicalHeaders = signedHeaderKeys.map((key) => `${key}:${headers[key]}\n`).join("");
  const signedHeaders = signedHeaderKeys.join(";");
  const canonicalRequest = ["POST", "/", "", canonicalHeaders, signedHeaders, hash(payload)].join("\n");
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [algorithm, amzDate, credentialScope, hash(canonicalRequest)].join("\n");
  const signature = hmac(signingKey(secretAccessKey, dateStamp, region), stringToSign, "hex");

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      ...headers,
      authorization: `${algorithm} Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`
    },
    body: payload
  });

  if (!response.ok) {
    return {
      stored: false,
      reason: "dynamodb_rejected",
      message: "DynamoDB rejected the write request.",
      status: response.status
    };
  }

  return {
    stored: true,
    backend: "dynamodb",
    reportId,
    table: tableName,
    region
  };
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return json(res, 200, {
      ok: true,
      service: "h0-reports",
      backend: process.env.H0_REPORTS_TABLE ? "dynamodb_configured" : "not_configured"
    });
  }

  if (req.method !== "POST") {
    res.setHeader("allow", "GET, POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  try {
    const body = await readBody(req);
    const report = JSON.parse(body || "{}");
    const result = await putReport(report);
    return json(res, result.stored ? 200 : 202, { ok: true, ...result });
  } catch {
    return json(res, 400, {
      ok: false,
      error: "invalid_report_payload"
    });
  }
};
