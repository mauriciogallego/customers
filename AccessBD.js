console.log('AccessBD')
const mongoDriver = require('mongodb');
const {MongoClient, ObjectId} = mongoDriver;
var errConnect = false;
var listCustomers;
var db;
MongoClient.connect("mongodb+srv://prueba:prueba@mytinerarybd-hndmb.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology : true},(err,client)=>{
    if (err) { 
      errConnect = true;
      console.log(err)
      }
      else{
        db = client.db("CustomersPrueba");
        listCustomers = db.collection("Customers");
        console.log('entro a la base')
      }
  })

if (!errConnect){
  module.exports = {
    getListCustomers(callback){
      console.log(listCustomers.find())
      //callback()
    },
    setCustomers(newCustomer, callback){
      listCustomers.insertOne(newCustomer,()=>{
        callback()
      })
    }
  }
}
