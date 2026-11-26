# Exercise 3

This Node.js HTTP server returns a JSON greeting at `/` and a JSON 404 for unknown routes. It uses Node.js 24 and has no dependencies to install.

Run `npm run build` to check the server syntax and copy the application into `dist/`. Run `npm test` to test the built application. Run `npm start` and open http://localhost:9002 to try it in a browser.

The workflow in `.github/workflows/ci.yml` checks out the repository inside a Node.js 24 container on every push and pull request. It builds the server and runs the same tests.