// Needy NewRelic
// require('newrelic');

// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-body');
const staticFiles = require('koa-static');
const fs = require('fs');
const path = require('path');

// Declarations
const app = new Koa();
const port = 3000;

const routes = require('../../routers/routerPostgres.js');

// Middleware
app.use(bodyParser());
app.use(staticFiles(path.join(__dirname, '../../client/dist')));

// Router
app.use(routes.routes());

// Port establishment
app.listen(port, () => {
  console.log(`(barba)Koa on port: ${port}`);
});
