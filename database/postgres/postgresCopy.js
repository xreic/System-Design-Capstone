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
    var stream = client.query(
      copyFrom(
        `COPY data (item, type, price ,image, colors, collections) FROM STDIN WITH DELIMITER '_';`
      )
    );
    var fileStream = fs.createReadStream(location);
    fileStream.on('error', done);
    stream.on('error', done);
    stream.on('end', done);
    fileStream.pipe(stream);
  }
});
