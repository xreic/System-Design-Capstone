const nameModel = require('./mongo.js');
const faker = require('faker');

const upperLimit = 200000;

const generator = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ name: faker.name.firstName() });
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
      generator()
    ]);

    await nameModel
      .insertMany(set)
      .then((success) => {
        if (i === upperLimit) {
          const end = process.hrtime.bigint();
          const elapsedTime = parseInt(end - start, 10) / 60000000000;
          console.log(`-------------- Finish --------------`);
          console.log(`${elapsedTime} minutes`);
        }
      })
      .catch((err) => {});
  }
}

const start = process.hrtime.bigint();
seed();
