// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const faker = require('faker');
const fs = require('fs');
const path = require('path');

// Base set
const amountOfItems = 100000;
var items = [];
const type = [
  "Men's Shoes",
  "Men's Running Shoes",
  "Women's Shoes",
  "Women's Running Shoes"
];
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

fs.appendFileSync(
  path.join(`${__dirname}/pregen/`, 'items.js'),
  `module.exports = ${JSON.stringify(items)}`,
  'utf8'
);
fs.appendFileSync(
  path.join(`${__dirname}/pregen/`, 'colors.js'),
  `module.exports = ${JSON.stringify(colors)}`,
  'utf8'
);
fs.appendFileSync(
  path.join(`${__dirname}/pregen/`, 'collection.js'),
  `module.exports = ${JSON.stringify(collection)}`,
  'utf8'
);

// Timer End
const end = process.hrtime.bigint();
console.log(`Finished in: ${parseInt(end - start, 10) / 1e6} milliseconds`);
