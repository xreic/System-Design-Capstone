// Dependencies
const colors = require('colors');
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
  var query, start, end;

  if (method === 0) {
    query = {
      text: `SELECT data FROM data WHERE data->'collections' ? $1 ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}`]
    };
  } else if (method === 1) {
    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`]
    };
  } else {
    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 AND data->>'type' NOT LIKE '%Run%' ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}%`]
    };
  }

  query.rowMode = 'array';

  // Timer start
  start = process.hrtime.bigint();

  const data = await client.query(query);

  // Timer end
  end = process.hrtime.bigint();

  // prettier-ignore
  if ((parseInt(end - start, 10) / 1e6) > 25) {
    if (keyword === 'nning') {
      keyword = 'Running';
    }

    console.log(
      `${keyword} in: ${(parseInt(end - start, 10) / 1e6).toFixed(2)} ms`.red
    );
  }

  return data.rows.flat();
};

router.get('/search/:keyword', async (ctx) => {
  var keyword = ctx.request.url.substring(8);

  if (filter.includes(keyword)) {
    try {
      if (keyword.includes('%20')) {
        keyword = keyword.split('%20');

        // Query and respond
        ctx.body = await querier(
          2,
          keyword[0].substring(0, keyword[0].length - 2)
        );
      } else {
        if (keyword === 'Running') {
          keyword = 'nning';
        }

        // Query and respond
        ctx.body = await querier(1, keyword);
      }
    } catch (err) {
      ctx.body = err;
    }
  } else {
    try {
      // Query and respond
      ctx.body = await querier(0, keyword);
    } catch (err) {
      ctx.body = err;
    }
  }
});

module.exports = router;
