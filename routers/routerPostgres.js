// Dependencies
const Router = require('@koa/router');
const router = new Router();
const { Client } = require('pg');

// Database connection
const URL = 'postgres://postgres:postgres@localhost:5432/postgres';
const client = new Client(URL);

// Declarations
const filter = ["Men's%20Shoe", "Women's%20Shoe", 'Running', 'Run'];

(async () => {
  try {
    await client.connect();
  } catch (err) {}
})();

router.get('/search/:keyword', async (ctx) => {
  var keyword = ctx.request.url.substring(8);

  if (filter.includes(keyword)) {
    try {
      keyword = keyword.split('%20').join(' ');
      keyword = keyword.split(`'`).join(`''`);

      if (keyword === 'Running') {
        keyword = 'nning';
      }

      // Timer start
      let start = process.hrtime.bigint();

      // Query
      const data = await client.query(
        `SELECT * FROM data WHERE data->>'type' LIKE '%${keyword}%' ORDER BY id DESC LIMIT 50;`
      );

      // Timer end
      let end = process.hrtime.bigint();

      if (keyword === 'nning') {
        keyword = 'Running';
      }

      console.log(
        `${keyword} in: ${(parseInt(end - start, 10) / 1e6).toFixed(2)} ms`
      );

      const dataSet = [];

      for (var item of data.rows) {
        // console.log(item.id);
        dataSet.push(item.data);
      }

      // Reponse back to client
      ctx.body = dataSet;
    } catch (err) {
      ctx.body = err;
    }
  } else {
    try {
      // Timer start
      let start = process.hrtime.bigint();

      // Query
      const data = await client.query(
        `SELECT * FROM data WHERE data->'collections' ? '${keyword}' ORDER BY id DESC LIMIT 50;`
      );

      // Timer end
      let end = process.hrtime.bigint();
      console.log(
        `${keyword} in: ${(parseInt(end - start, 10) / 1e6).toFixed(2)} ms`
      );

      const dataSet = [];

      for (var item of data.rows) {
        // console.log(item.id);
        dataSet.push(item.data);
      }

      // Reponse back to client
      ctx.body = dataSet;
    } catch (err) {
      ctx.body = err;
    }
  }
});

module.exports = router;
