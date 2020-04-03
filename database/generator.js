const db = require('./mongo.js');

const faker = require('faker');

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
      let randLength = Math.floor(Math.random() * 5);
      let colors = [];

      for (let i = 0; i < randLength; i++) {
        colors.push(faker.commerce.color());
      }

      resolve({
        item: faker.commerce.product(),
        type: type[Math.floor(Math.random() * 4)],
        price: faker.commerce.price(),
        colors,
        image: Math.floor(Math.random() * 1000),
        collection: faker.lorem
          .words(Math.ceil(Math.random() * 5) + 3)
          .split(' ')
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
      .collection('Names')
      .insertMany(set)
      .then((success) => {
        if (i === upperLimit) {
          const end = process.hrtime.bigint();
          console.log(
            `Finished in: ${parseInt(end - start, 10) / 1e6} milliseconds`
          );
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const start = process.hrtime.bigint();
seed();
