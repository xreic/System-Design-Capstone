// Dependencies
const fs = require('fs');
const path = require('path');

// MongoDB
const mongoose = require('mongoose');

describe('Verifying base data set generator in working order', () => {
  test('Checks base data set exists', () => {
    let files = fs.readdirSync(
      path.join(__dirname, '../database/pregeneratedData')
    );

    expect(files.includes('items.js')).toBeTruthy();
    expect(files.includes('colors.js')).toBeTruthy();
    expect(files.includes('collection.js')).toBeTruthy();
  });

  test('Check contents of items.txt', () => {
    let contents = fs.readFileSync(
      path.join(__dirname, '../database/pregeneratedData/items.js'),
      'utf8'
    );

    contents = JSON.parse(contents.substring(17, contents.length - 1));

    expect(contents.length).toBeGreaterThan(0);
  });

  test('Check contents of colors.txt', () => {
    let contents = fs.readFileSync(
      path.join(__dirname, '../database/pregeneratedData/colors.js'),
      'utf8'
    );

    contents = JSON.parse(contents.substring(17, contents.length - 1));

    expect(contents.length).toBeGreaterThan(0);
  });

  test('Check contents of collection.txt', () => {
    let contents = fs.readFileSync(
      path.join(__dirname, '../database/pregeneratedData/collection.js'),
      'utf8'
    );

    contents = JSON.parse(contents.substring(17, contents.length - 1));

    expect(contents.length).toBeGreaterThan(0);
  });
});

describe('Verify MongoDB Seeded', () => {
  beforeAll(async (done) => {
    await mongoose.connect('mongodb://127.0.0.1/fakeData', {
      useNewUrlParser: true
    });

    done();
  });

  test('Verify if seeder functionality', async () => {
    let db = await mongoose.connection;

    let contents = await db.collection('names').find({}).count();
    console.log(contents);

    expect(contents).toEqual(10000000);
  });

  afterAll(async (done) => {
    await mongoose.disconnect();
    done();
  });
});
