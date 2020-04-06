// Timer Start
const start = process.hrtime.bigint();

const fs = require('fs');
const path = require('path');

const { Pool, Client } = require('pg');
const copyFrom = require('pg-copy-streams').from;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

const location = path.join(__dirname, '../pregeneratedData/data2.txt');

pool.connect(function (err, client, done) {
  if (err) {
    console.error(err);
    throw err;
  } else {
    var stream = client.query(copyFrom(`COPY data (data) FROM STDIN;`));
    var fileStream = fs.createReadStream(location);
    fileStream.on('error', done);
    stream.on('error', done);
    stream.on('end', () => {
      // Timer End
      const end = process.hrtime.bigint();
      //prettier-ignore
      console.log(`Base set of data created in: ${(parseInt(end - start, 10) / 1e9).toFixed(2)} seconds!`);
    });
    stream.on('end', done);
    fileStream.pipe(stream);
  }
});

// var stream = client.query(
//   copyFrom(
//     `COPY data (item, type, price ,image, colors, collections) FROM STDIN WITH DELIMITER '_';`
//   )
// );
