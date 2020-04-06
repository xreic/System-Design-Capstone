// Dependencies
const db = require('./mongo.js');
const faker = require('faker');

// Import Data
const genItems = require('../pregeneratedData/items.js');
const genColors = require('../pregeneratedData/colors.js');
const genCollection = require('../pregeneratedData/collection.js');

const upperLimit = 1e5;

const type = [
  "Men's Shoes",
  "Men's Running Shoes",
  "Women's Shoes",
  "Women's Running Shoes"
];

const generator = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      // Randomly select colors
      let colors = {};
      let colorsLength = Math.floor(Math.random() * 3) + 2;

      for (let i = 0; i < colorsLength; i++) {
        colors[genColors[Math.floor(Math.random() * genColors.length)]] = 1;
      }

      colors = Object.keys(colors);

      // Randomly select collections
      let collections = {};
      let collectionsLength = Math.floor(Math.random() * 5) + 3;

      for (let i = 0; i < collectionsLength; i++) {
        collections[
          genCollection[Math.floor(Math.random() * genCollection.length)]
        ] = 1;
      }

      collections = Object.keys(collections);

      resolve({
        item: genItems[Math.floor(Math.random() * genItems.length)],
        type: type[Math.floor(Math.random() * type.length)],
        price: faker.commerce.price(),
        colors,
        image: Math.floor(Math.random() * 1000),
        collections
      });
    }, 0)
  );
};

async function seed() {
  for (let i = 1; i <= upperLimit; i++) {
    const set = await Promise.all([
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

    await db
      .collection('names')
      .insertMany(set)
      .then((success) => {
        if (i === upperLimit) {
          const end = process.hrtime.bigint();
          //prettier-ignore
          console.log(`Finished in: ${(parseInt(end - start, 10) / 6e10).toFixed(2)} minutes`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const start = process.hrtime.bigint();
seed();
