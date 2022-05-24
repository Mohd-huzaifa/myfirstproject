const express = require('express');
const {MongoClient} = require('mongodb');
//const meaning = require('./words')
const bodyParser = require('body-parser');
const app = express();
//app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  res.send("Hello world")
})
app.post('/',(req,res)=>{
  
   res.send("thanks")
   
})
const client = new MongoClient('mongodb://localhost:27017');
async function run() {
  try {
    await client.connect();
    const database = client.db('Huzaifa');
    const movies = database.collection('lists');
    // Query for a movie that has the title 'Back to the Future'
    const query = { name : 'Afifa rehman' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.listen(4500,()=>{
    console.log("Your port is runninng on the 4500 port")
})