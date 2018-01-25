var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json({"type":"application/json"});
var accountService = require('./accountService')
var port = 3002;



// CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




/* Endpoints */

app.post('/createAccount', jsonParser, function (req, res) {
  
  console.log("\t endpoint: createAccount()");
  
  if (!req.body){
	  console.log("\t error in request body")
	  return res.sendStatus(400);
  }
  
  else{
		// console.log("~~~~~~ Request Body ~~~~~~");
		// console.log(JSON.stringify(req.body));
		// res.send("Thanks!!!");
		
		accountService.createAccount(req.body, (result) => res.send(result));
	}
});


app.post('/getUserInfo', jsonParser, function (req, res) {
	console.log("\t endpoint: getUserInfo()");
	if (!req.body){
		console.log("\t error in request body")
		return res.sendStatus(400);
	}
	else{		
		accountService.getUserInfo(req.body, (result) => res.send(result));
	}
});

app.listen(port, () => console.log('Data Server listening on port #'+port+'...'))


/* HTTPS options/stuff. Ignore for now...

var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('<...path to .pem file...>'),
    cert: fs.readFileSync('<...path to .pem file...>'),
    ca: fs.readFileSync('<...path to .pem file...>')
};

var httpsServer = https.createServer(options, app);
httpsServer.listen(port);

*/
