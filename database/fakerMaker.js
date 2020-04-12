// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const location = path.join(__dirname, '/pregeneratedData');

// Base set
const items = {};
const collections = {};

const arraySeeder = () => {
  // Generate fake product names
  while (Object.keys(items).length !== 4000) {
    items[faker.commerce.productName()] = 1;
  }

  // Generate lorem ispum words to use for collection
  const collection = faker.lorem.words(1000).split(' ');
  var counter = 0;

  while (counter < collection.length) {
    if (collection[counter].length < 2) {
      counter++;
      continue;
    } else {
      counter++;
      collections[collection[counter]] = 1;
    }
  }
};

arraySeeder();

fs.writeFileSync(
  path.join(location, 'items.js'),
  `module.exports = ${JSON.stringify(Object.keys(items))};`,
  'utf8'
);

fs.writeFileSync(
  path.join(location, 'collection.js'),
  `module.exports = ${JSON.stringify(Object.keys(collections))};`,
  'utf8'
);

// Timer End
const end = process.hrtime.bigint();
//prettier-ignore
console.log(`Base set of data created in: ${(parseInt(end - start, 10) / 1e9).toFixed(2)} seconds!`);
