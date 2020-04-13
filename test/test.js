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

  test('Check contents of collection.txt', () => {
    let contents = fs.readFileSync(
      path.join(__dirname, '../database/pregeneratedData/collection.js'),
      'utf8'
    );

    contents = JSON.parse(contents.substring(17, contents.length - 1));

    expect(contents.length).toBeGreaterThan(0);
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

    let query = {
      text: `SELECT data FROM data WHERE data->'collections' ? $1 ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    contents = contents.rows.flat();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "collections" column executes in under 50ms`, async () => {
    let keyword = collection[Math.floor(Math.random() * collection.length)];
    let start = process.hrtime.bigint();

    let query = {
      text: `SELECT data FROM data WHERE data->'collections' ? $1 ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  test(`Verify a query against the "type" column executes properly for "Running"`, async () => {
    // Running is converted to nning then converted back in server-side logic
    let keyword = 'nning';

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    contents = contents.rows.flat();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms for "Running"`, async () => {
    // Running is converted to nning then converted back in server-side logic
    let keyword = 'nning';
    let start = process.hrtime.bigint();

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  test(`Verify a query against the "type" column executes properly for "Run"`, async () => {
    let keyword = 'Run';

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    contents = contents.rows.flat();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms for "Run"`, async () => {
    let keyword = 'Run';
    let start = process.hrtime.bigint();

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 ORDER BY id DESC LIMIT 50;`,
      values: [`%${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
    await client.end();
  });

  test(`Verify a query against the "type" column executes properly for "Men's Shoes"`, async () => {
    let keyword = 'Men';

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 AND data->>'type' NOT LIKE '%Run%' ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    contents = contents.rows.flat();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms for "Men's Shoes"`, async () => {
    let keyword = 'Men';
    let start = process.hrtime.bigint();

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 AND data->>'type' NOT LIKE '%Run%' ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
  });

  test(`Verify a query against the "type" column executes properly for "Women's Shoes"`, async () => {
    let keyword = 'Women';

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 AND data->>'type' NOT LIKE '%Run%' ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    contents = contents.rows.flat();

    expect(contents.length).toBe(50);
  });

  test(`Verify a query against the "type" column executes in under 50ms for "Women's Shoes"`, async () => {
    let keyword = 'Women';
    let start = process.hrtime.bigint();

    query = {
      text: `SELECT data FROM data WHERE data->>'type' LIKE $1 AND data->>'type' NOT LIKE '%Run%' ORDER BY id DESC LIMIT 50;`,
      values: [`${keyword}%`],
      rowMode: 'array'
    };

    let contents = await client.query(query);
    let end = process.hrtime.bigint();

    expect(parseInt(end - start, 10) / 1e6).toBeLessThanOrEqual(50);
    await client.end();
  });
});
