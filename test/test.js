// Dependencies
const fs = require('fs');
const path = require('path');

// MongoDB
const mongoose = require('mongoose');

// PostgreSQL
const { Client } = require('pg');
const URL = 'postgres://postgres:postgres@localhost:5432/postgres';
const client = new Client(URL);

// Base data set loading
const type = ["Men's Shoe", "Women's Shoe", 'Running', 'Run'];
const collection = require('../database/pregeneratedData/collection.js');

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

describe.skip('Verify MongoDB Seeded', () => {
  beforeEach(async () => {
    await mongoose.connect('mongodb://127.0.0.1/fakeData', {
      useNewUrlParser: true
    });
  });

  test('Verify if seeder functionality', async () => {
    let db = await mongoose.connection;

    let contents = await db.collection('names').find({}).count();

    expect(contents).toBeGreaterThanOrEqual(10000000);
  });

  test(`Verify a query against the "collections" column executes properly`, async () => {
    let db = await mongoose.connection;
    let keyword = collection[Math.floor(Math.random() * collection.length)];

    let contents = await db
      .collection('names')
      .find({
        $or: [
          { type: { $regex: keyword, $options: 'i' } },
          { collections: { $regex: keyword, $options: 'i' } }
        ]
      })
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "collections" column executes in under 50ms`, async () => {
    let db = await mongoose.connection;
    let keyword = collection[Math.floor(Math.random() * collection.length)];
    let start = process.hrtime.bigint();

    let contents = await db
      .collection('names')
      .find({
        $or: [
          { type: { $regex: keyword, $options: 'i' } },
          { collections: { $regex: keyword, $options: 'i' } }
        ]
      })
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  test(`Verify a query against the "type" column executes properly`, async () => {
    let db = await mongoose.connection;
    let keyword = type[Math.floor(Math.random() * type.length)];
    let start = process.hrtime.bigint();

    let contents = await db
      .collection('names')
      .find({
        $or: [
          { type: { $regex: keyword, $options: 'i' } },
          { collections: { $regex: keyword, $options: 'i' } }
        ]
      })
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms`, async () => {
    let db = await mongoose.connection;
    let keyword = collection[Math.floor(Math.random() * collection.length)];
    let start = process.hrtime.bigint();

    let contents = await db
      .collection('names')
      .find({
        $or: [
          { type: { $regex: keyword, $options: 'i' } },
          { collections: { $regex: keyword, $options: 'i' } }
        ]
      })
      .limit(50)
      .sort({ _id: -1 })
      .toArray();

    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });
});

describe('Verify PostgreSQL Seeded', () => {
  test('Verify if seeder functionality', async () => {
    await client.connect();
    let contents = await client.query('SELECT COUNT(*) FROM data;');

    contents = parseInt(contents.rows[0].count, 10);

    expect(contents).toBeGreaterThanOrEqual(10000000);
  });

  test(`Verify a query against the "collections" column executes properly`, async () => {
    let keyword = collection[Math.floor(Math.random() * collection.length)];

    let contents = await client.query(
      `SELECT * FROM data WHERE data @> '{"collections": ["${keyword}"]}' OR data->>'type' LIKE '%${keyword}%' LIMIT 50;`
    );

    const dataSet = [];
    for (var item of contents.rows) {
      dataSet.push(item.data);
    }

    expect(dataSet.length).toBe(50);
  });

  test(`Verify a query against the "collections" column executes in under 50ms`, async () => {
    let keyword = collection[Math.floor(Math.random() * collection.length)];
    let start = process.hrtime.bigint();

    let contents = await client.query(
      `SELECT * FROM data WHERE data @> '{"collections": ["${keyword}"]}' OR data->>'type' LIKE '%${keyword}%' LIMIT 50;`
    );
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  test(`Verify a query against the "type" column executes properly`, async () => {
    let keyword = type[Math.floor(Math.random() * type.length)];

    let contents = await client.query(
      `SELECT * FROM data WHERE data @> '{"collections": ["${keyword}"]}' OR data->>'type' LIKE '%${keyword}%' LIMIT 50;`
    );

    const dataSet = [];
    for (var item of contents.rows) {
      dataSet.push(item.data);
    }

    expect(dataSet.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms`, async () => {
    let keyword = type[Math.floor(Math.random() * type.length)];
    let start = process.hrtime.bigint();

    let contents = await client.query(
      `SELECT * FROM data WHERE data @> '{"collections": ["${keyword}"]}' OR data->>'type' LIKE '%${keyword}%' LIMIT 50;`
    );
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
    await client.end();
  });
});
