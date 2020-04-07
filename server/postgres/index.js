// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-body');
const staticFiles = require('koa-static');
const morgan = require('koa-morgan');
const fs = require('fs');
const path = require('path');

// Declarations
const app = new Koa();
const port = 3001;

const routes = require('../../routers/routerPostgres.js');

// const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {
//   flags: 'a'
// });

// Middleware
app.use(bodyParser());
app.use(staticFiles(path.join(__dirname, '../../client/dist')));
// app.use(morgan('combined', { stream: accessLogStream }));

// Router
app.use(routes.routes());

// Port establishment
app.listen(port, () => {
  console.log(`(barba)Koa on port: ${port}`);
});
