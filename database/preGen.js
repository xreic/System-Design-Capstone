// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const faker = require('faker');
const fs = require('fs');
const fsP = require('fs').promises;
const path = require('path');

// Base set
const amountOfItems = 100000;
var items = [];
var colors = [];

var collection = faker.lorem.words(200).split(' ');

const arraySeeder = () => {
  for (var i = 0; i < amountOfItems; i++) {
    items.push(faker.commerce.productName());
  }
  for (var j = 0; j < 12; j++) {
    colors.push(faker.commerce.color());
  }
};

arraySeeder();

fs.unlink(
  path.join(`${__dirname}/pregeneratedData/`, 'items.js'),
  async (err) => {
    if (err) {
      console.log('Writing items.js...');
    }
    await fsP.appendFile(
      path.join(`${__dirname}/pregeneratedData/`, 'items.js'),
      `module.exports = ${JSON.stringify(items)};`,
      'utf8'
    );
  }
);

fs.unlink(
  path.join(`${__dirname}/pregeneratedData/`, 'colors.js'),
  async (err) => {
    if (err) {
      console.log('Writing colors.js...');
    }
    await fsP.appendFile(
      path.join(`${__dirname}/pregeneratedData/`, 'colors.js'),
      `module.exports = ${JSON.stringify(colors)};`,
      'utf8'
    );
  }
);

fs.unlink(
  path.join(`${__dirname}/pregeneratedData/`, 'collection.js'),
  async (err) => {
    if (err) {
      console.log('Writing collection.js...');
    }
    await fsP.appendFile(
      path.join(`${__dirname}/pregeneratedData/`, 'collection.js'),
      `module.exports = ${JSON.stringify(collection)};`,
      'utf8'
    );
  }
);

// Timer End
const end = process.hrtime.bigint();
console.log(`Finished in: ${parseInt(end - start, 10) / 1e6} milliseconds`);
