const http = require("node:http");

function createServer() {
  return http.createServer((request, response) => {
    const { pathname } = new URL(request.url, "http://localhost");
    response.setHeader("Content-Type", "application/json");

    if (request.method === "GET" && pathname === "/") {
      response.end(JSON.stringify({ message: "Hello from Exercise 3" }));
      return;
    }

    response.statusCode = 404;
    response.end(JSON.stringify({ error: "Not found" }));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT ?? 9002);
  createServer().listen(port, () => {
    console.log(`Open http://localhost:${port}`);
  });
}

module.exports = { createServer };