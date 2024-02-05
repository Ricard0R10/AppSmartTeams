const postgres = require('postgres');
require('dotenv').config();
const { Client } = require('pg');

const sql = postgres({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  ssl: { rejectUnauthorized: false },
});

module.exports = sql;
