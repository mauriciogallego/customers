console.log('AccessBD')
const mongoDriver = require('mongodb');
const {MongoClient, ObjectId} = mongoDriver;

const Mongoose = require('mongoose');
const {Customers} = require('./app-schema.js')

var errConnect = false;
var listCustomers;
var uri = "mongodb+srv://mauricio:1@mytinerarybd-hndmb.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{useUnifiedTopology : true, connectTimeoutMS: 10000},(err,client)=>{
    if (err) { 
      errConnect = true;
      console.log(err)
      }
      else{
        let db = client.db("CustomersPrueba");
        listCustomers = db.collection("Customers");
        console.log('entro a la base')
      }
  });



if (!errConnect){
  module.exports = {
    getListCustomers(callback){
      listCustomers.find().toArray((err,docs)=>{
        callback(docs)
      })
      //callback()
    },
    setCustomers(newCustomer, callback){
      let modelCustomer = new Mongoose.model("Customers", Customers );
      let mongoId = new Mongoose.Types.ObjectId();
      newCustomer._id = mongoId;

      newCustomer = modelCustomer(newCustomer);
      listCustomers.insertOne(newCustomer,()=>{
      callback()
      })
    }
  }
}
