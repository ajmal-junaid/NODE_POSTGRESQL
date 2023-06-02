const express = require('express');
const bodyParser = require('body-parser');
const client = require('./database')
const sampleRoutes=require('./routes/operations')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',sampleRoutes);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
