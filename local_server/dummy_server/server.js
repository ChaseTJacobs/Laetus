const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log("\t hit...");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  // send dummy data
  res.send({name: "Nate Tastic", email: "asdf@byui.edu", phone: "208-496-3766"});
  //TODO: hook up a real DB...
})

app.listen(3000, () => console.log('listening on 3000...'))