
const { Db } = require('mongodb');
const mongoose = require('mongoose');
//main().catch(err => console.log(err));

async function run(){
    await mongoose.connect('mongodb://localhost:27017');
}
run();

//console.log("Connection is successfull")

const Schem = new mongoose.Schema({
    name :  String,
    email : String,
    phone_no : Number
})

const modelClass = new mongoose.model('modelClass',Schem);

const object1 = new modelClass({name:"Mohd Huzaifa",email:"mohd@gmail.com",phone_no:8433043426});

  object1.save();
  console.log("Successfully inserted")
  db.close();