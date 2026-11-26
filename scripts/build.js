const { copyFileSync, mkdirSync } = require("node:fs");

mkdirSync("dist", { recursive: true });
copyFileSync("server.js", "dist/server.js");