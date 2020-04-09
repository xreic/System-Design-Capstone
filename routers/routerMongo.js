// Dependencies
const Router = require('@koa/router');
const router = new Router();

// Database connection
const db = require('../database/mongo/mongo.js');

// Declarations
const collection = db.collection('names');

router.get('/search/:keyword', async (ctx) => {
  var keyword = ctx.request.url.substring(8);
  keyword = keyword.split('%20').join(' ');
  // console.log(keyword);

  try {
    // Timer start
    let start = process.hrtime.bigint();

    const data = await collection
      .find({
        $or: [
          { type: { $regex: keyword, $options: 'i' } },
          { collections: { $regex: keyword, $options: 'i' } }
        ]
      })
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    // Timer end
    let end = process.hrtime.bigint();
    console.log(
      `Finished in: ${(parseInt(end - start, 10) / 1e6).toFixed(2)} ms`
    );

    // Reponse back to client
    ctx.body = data;
  } catch (err) {
    ctx.body = err;
  }
});

module.exports = router;
