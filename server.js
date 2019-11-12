const express = require('express');
const bodyParser = require("body-parser");
const conexion = require('./AccessBD.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/api/customers')
  .get((req,res)=>{

  })
  .post(()=>{

  })
var port = process.env.port || 5000

app.listen(port, ()=>{
  console.log(`${port}`)
});