const mongoDriver = require('mongodb');
const {MongoClient, ObjectId} = mongoDriver;
let errConnect = false;

MongoClient.connect("mongodb+srv://mauriciogallego:1@mytinerarybd-hndmb.mongodb.net/test?retryWrites=true&w=majority",(err,client)=>{
  if (err) { 
    errConnect = true;
    }
    else{
      var db = client.db("CustomersPrueba");
      console.log('entro a la bd')
    }
})

module.exports = {
  getListCustomers(){
    return
  }
}