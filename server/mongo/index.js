// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-body');
const staticServer = require('koa-static');
const path = require('path');

// Declarations
const app = new Koa();
const port = 3000;

const routes = require('../../routers/routerMongo.js')

// Middleware
app.use(bodyParser());
app.use(staticServer(path.join(__dirname, '../../client/dist')));
app.use(routes.routes());

// Port establishment
app.listen(port, () => {
  console.log(`(barba)Koa on port: ${port}`);
});
