const express = require('express')
const app = express()
var request = require('request');
 

app.get('/', function (req, res) {
  console.log("\t hit...");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  // send dummy data
  //res.send({name: "Nate Tastic", email: "asdf@byui.edu", phone: "208-496-3766"});
  //TODO: hook up a real DB...
  
	request.post(
		'http://localhost:3002/getUserInfo',
		{ json: { "username": "nate@email.com", "password": "myPassWord" } },
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log("\t got response from data server:");
				console.log(body);
				res.send(body);
			}
		}
	);

})

app.listen(3001, () => console.log('listening on 3001...'))