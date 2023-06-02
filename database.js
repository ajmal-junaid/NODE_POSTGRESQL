const { Client } = require('pg');
require('dotenv').config()
console.log(process.env.SQL_HOST);
const client = new Client({
    user: process.env.SQL_USERNAME,
    host: process.env.SQL_HOST,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD,
    port: process.env.SQL_PORT
  });

  client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL:', err);
  });
  module.exports=client;