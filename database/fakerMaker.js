// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const faker = require('faker');
const fs = require('fs');
const fsP = require('fs').promises;
const path = require('path');

// Base set
const items = {};
const colors = {};
const collections = {};

const arraySeeder = () => {
  // Generate fake product names
  while (Object.keys(items).length !== 4000) {
    items[faker.commerce.productName()] = 1;
  }

  // Generate colors
  while (Object.keys(colors).length !== 20) {
    colors[faker.commerce.color()] = 1;
  }

  // Generate lorem ispum words to use for collection
  const collection = faker.lorem.words(1000).split(' ');
  var counter = 0;

  while (counter < collection.length) {
    collections[collection[counter]] = 1;
    counter++;
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
      `module.exports = ${JSON.stringify(Object.keys(items))};`,
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
      `module.exports = ${JSON.stringify(Object.keys(colors))};`,
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
      `module.exports = ${JSON.stringify(Object.keys(collections))};`,
      'utf8'
    );
  }
);

// Timer End
const end = process.hrtime.bigint();
//prettier-ignore
console.log(`Base set of data created in: ${(parseInt(end - start, 10) / 1e9).toFixed(2)} seconds!`);
