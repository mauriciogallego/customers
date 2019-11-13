const express = require('express');
const bodyParser = require("body-parser");
const conexion = require('./AccessBD.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.port || 5000;

app.route('/api/customers')
  .get((req,res)=>{
    console.log('entro ')
    conexion.getListCustomers((json)=>{
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
      console.log('agregado el customer')
      res.redirect('/');
    });
  })

app.listen(port, ()=>{
  console.log(`${port}`)
});