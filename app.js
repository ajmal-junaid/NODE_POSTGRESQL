const express = require('express');
const bodyParser = require('body-parser');
const {getUsers} = require('./queries')
// const { Client } = require('pg');

// // Set up the PostgreSQL client
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'brototype',
//   password: '09876',
//   port: 5432,
// });

// // Connect to the PostgreSQL database
// client.connect()
//   .then(() => {
//     console.log('Connected to PostgreSQL database');
//   })
//   .catch(err => {
//     console.error('Error connecting to PostgreSQL:', err);
//   });

// Create an Express application
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/users',getUsers)

app.get('/',(req,res)=>{
  res.json({info:'node express and postgres crud rest api'})
})
app.get('/users', (req, res) => {
  client.query('SELECT * FROM students', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching users');
    } else {
      res.json(result.rows);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
