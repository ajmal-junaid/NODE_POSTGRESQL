const express = require('express');
const router = express.Router();
const client = require('../database')


router.get('/test',(req,res)=>{
    client.query('SELECT * FROM student', (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error fetching users');
        } else {
          res.json(result.rows);
        }
      });
})

module.exports = router