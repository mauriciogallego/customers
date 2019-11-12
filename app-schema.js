const mongoose = require('mongoose');
const {Schema} = mongoose;

let customers = new Schema({
  Nombre:{
    type: String,
    required: true
  },
  Apellido: {
    type: String,
    required:true
  },
  Edad:{
    type: Number,
    required: true
  },
  Mail: String
});

module.exports = {
  Customers: customers
}