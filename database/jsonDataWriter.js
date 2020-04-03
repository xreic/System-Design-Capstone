// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const fs = require('fs');
const faker = require('faker');
const path = require('path');

const db = require('./mongo');
const exec = require('child_process').exec;

// fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// Base set
const amountOfItems = 100000;
const items = [];
const type = [
  "Men's Shoes",
  "Men's Running Shoes",
  "Women's Shoes",
  "Women's Running Shoes"
];
const colors = [];

const collection = faker.lorem.words(200).split(' ');

const arraySeeder = () => {
  for (var i = 0; i < amountOfItems; i++) {
    items.push(faker.commerce.productName());
  }
  for (var j = 0; j < 12; j++) {
    colors.push(faker.commerce.color());
  }
};

arraySeeder();

// Timer End
const end = process.hrtime.bigint();
console.log(`Finished in: ${parseInt(end - start, 10) / 1e9} seconds`);
