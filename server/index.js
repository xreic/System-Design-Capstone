// NewRelic
require('newrelic');

// Dependencies
const Koa = require('koa');

// Declarations
const app = new Koa();
const port = 3000;
const routes = require('../routers/router.js');

// Router
app.use(routes.routes());

// Port establishment
app.listen(port, () => {
  console.log(`(barba)Koa on port: ${port}`);
});
