const assert = require("node:assert/strict");
const { once } = require("node:events");
const { before, after, test } = require("node:test");
const { createServer } = require("../dist/server");

const server = createServer();
let baseUrl;

before(async () => {
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise((resolve, reject) => {
  server.close((error) => error ? reject(error) : resolve());
}));

test("GET / returns the greeting as JSON", async () => {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "application/json");
  assert.deepEqual(await response.json(), { message: "Hello from Exercise 3" });
});

test("GET /missing returns a JSON 404", async () => {
  const response = await fetch(`${baseUrl}/missing`);
  assert.equal(response.status, 404);
  assert.deepEqual(await response.json(), { error: "Not found" });
});