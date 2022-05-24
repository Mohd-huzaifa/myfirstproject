const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');
async function showDatabase(){
   await client.connect();
const database = client.db('Huzaifa');
const collection = database.collection('lists');
const query= {name : 'Mohd Huzaifa'};
const value = await collection.findOne(query);
console.log(value)
 await  client.close()
}

showDatabase();


app.listen(4500,()=>{
    console.log("The is running on the port 4500")
})