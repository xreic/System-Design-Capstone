// Needy NewRelic
require('newrelic');

// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-body');
const fs = require('fs');
const path = require('path');

// Declarations
const app = new Koa();
const port = 3000;

const routes = require('../routers/router.js');

// Middleware
app.use(bodyParser());

// Router
app.use(routes.routes());

// Port establishment
app.listen(port, () => {
  console.log(`(barba)Koa on port: ${port}`);
});
