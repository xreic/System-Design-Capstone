// Timer Start
const start = process.hrtime.bigint();

// Dependencies
const faker = require('faker');

const fs = require('fs');
const fsP = require('fs').promises;
const path = require('path');

// Import Data
const genItems = require('../pregeneratedData/items.js');
const genColors = require('../pregeneratedData/colors.js');
const genCollection = require('../pregeneratedData/collection.js');

// Declarations
const shoeTypes = [
  "Men's Shoes",
  "Men's Running Shoes",
  "Women's Shoes",
  "Women's Running Shoes"
];

const location = path.join(__dirname, '../pregeneratedData/data.txt');

try {
  fs.unlinkSync(location);
} catch (err) {}

// Looped file append
const cycles = 5000;

const generator = async () => {
  let storage = [];

  for (var i = 1; i <= 10; i++) {
    // Randomly select colors
    let colors = {};
    let colorsLength = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < colorsLength; i++) {
      colors[genColors[Math.floor(Math.random() * genColors.length)]] = 1;
    }

    colors = JSON.stringify(Object.keys(colors));

    // Randomly select collections
    let collections = {};
    let collectionsLength = Math.floor(Math.random() * 5) + 3;

    for (let i = 0; i < collectionsLength; i++) {
      collections[
        genCollection[Math.floor(Math.random() * genCollection.length)]
      ] = 1;
    }

    collections = JSON.stringify(Object.keys(collections));

    let item = genItems[Math.floor(Math.random() * genItems.length)];
    let type = shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
    let price = faker.commerce.price();
    let image = Math.floor(Math.random() * 1000);
    storage.push(
      `{"item": "${item}", "type": ["${type}"], "price": ${price}, "image": ${image}, "colors": ${colors}, "collections": ${collections}}`
    );
  }

  return fsP.appendFile(location, storage.join('\n') + '\n', 'utf8');
};

(async () => {
  for (var i = 0; i < cycles; i++) {
    await Promise.all([
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator(),
      generator()
    ]);

    //prettier-ignore
    if (i === cycles - 1) {
      const end = process.hrtime.bigint();
      console.log(`Finished in: ${(parseInt(end - start, 10) / 6e10).toFixed(2)} minutes`);
    }
  }
})();
