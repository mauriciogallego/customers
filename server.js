const express = require('express');
const bodyParser = require("body-parser");
const conexion = require('./AccessBD.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/api/customers')
  .get((req,res)=>{
    conexion.getListCustomers((json)=>{
      console.log(json)
      json = JSON.stringify(json)
      res.json(json);
    })

  })
  .post((req,res)=>{
    let newCustomer = {
      Nombre : req.body.Nombre,
      Apellido : req.body.Apellido,
      Edad : req.body.Edad,
      Mail : req.body.Mail
    }
    conexion.setCustomers(newCustomer, ()=>{
      res.redirect("/")
    })
  })
var port = process.env.port || 5000

app.listen(port, ()=>{
  console.log(`${port}`)
});