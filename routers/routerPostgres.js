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

const querier = async (method, keyword) => {
  var query;
  if (method === 0) {
    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`]
    };
  } else {
    query = {
      text: `SELECT data FROM data WHERE data->'collections' ? $1 ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}`]
    };
  }

  query.rowMode = 'array';

  const data = await client.query(query);

  return data.rows.flat();
};

// prettier-ignore
router.get('/search/:keyword', async (ctx) => {
  var keyword = ctx.request.url.substring(8);
  var start, end;

  if (filter.includes(keyword)) {
    try {
      keyword = keyword.split('%20').join(' ');

      if (keyword === 'Running') { keyword = 'nning'; }

      // Timer start
      start = process.hrtime.bigint();

      // Query and respond
      ctx.body = await querier(0, keyword);

      // Timer end
      end = process.hrtime.bigint();

      if (keyword === 'nning') { keyword = 'Running'; }
    } catch (err) {
      ctx.body = err;
    }
  } else {
    try {
      // Timer start
      start = process.hrtime.bigint();

      // Query and respond
      ctx.body = await querier(1, keyword);

      // Timer end
      end = process.hrtime.bigint();
    } catch (err) {
      ctx.body = err;
    }
  }

  console.log(
    `${keyword} in: ${(parseInt(end - start, 10) / 1e6).toFixed(2)} ms`
  );
});

module.exports = router;
