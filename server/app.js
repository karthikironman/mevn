// import dependencies
const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
mongoose.connect("mongodb+srv://karthikselvaraj:Lenovosw8@cluster0-ogkwu.mongodb.net/rascal", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('..............Playboy Connected to MongoDB.................'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const vtuSchema = new mongoose.Schema({
  name: String,
  password:String,
  email: String,
  stream: String,
  topic: String
});

async function newEntry(name,password, email, stream, topic,res) {
  const entry = new VTUDIGITAL({
    name: name,
    password: password,
    email: email,
    stream: stream,
    topic: topic
  });

  const result = await entry.save();
  res.send("successfully sent")
  console.log(result, "new entry saved in the database");
}
const VTUDIGITAL = mongoose.model('vtu', vtuSchema);
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.get('/todo', (req, res) => {
  res.send([
    'Thing 1',
    'Thinasdg 2'
  ])
})
app.post('/newuser', (req, res) => {
  console.log("received req is",req.body)
  newEntry(req.body.name, req.body.password, req.body.email, req.body.stream, req.body.topic,res);
}) 

app.get('/branches', (req,res) => {
  var branchlist = ["Mechanical","Electrical","Computers","Information","Civil"]
  console.log("sending branches")
 res.send(branchlist);
}) 
app.get('/colleges', (req,res) => {
  var collegelist = ["collge1","college2","college3"]
  console.log("sending colleges")
 res.send(collegelist);
}) 
app.listen(process.env.PORT || 8081) // client is already running on 8080