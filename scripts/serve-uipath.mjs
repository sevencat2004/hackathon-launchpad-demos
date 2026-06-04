import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const root = path.join(process.cwd(), "projects", "uipath-agenthack", "public");
const port = Number(process.env.PORT || 4175);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://127.0.0.1:${port}`);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("not found");
    return;
  }

  response.writeHead(200, {
    "content-type": types[path.extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`UiPath preview running at http://127.0.0.1:${port}/`);
});

