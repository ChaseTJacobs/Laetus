var express = 			require('express');
var bodyParser = 		require('body-parser')
var authService = 	require('./authService')
var accountService = require('./accountService')

var crypto = require('crypto'); // for POC
var env = require('./environment'); // for POC

var app = express();
var jsonParser = bodyParser.json({"type":"application/json"});
var port = 3002;



// CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




/* Endpoints */
app.post('/login', jsonParser, function (req, res) {
	  console.log("\t endpoint: login()");
	  if (!req.body){
		  console.log("\t error in request body")
		  return res.sendStatus(400);
	  }
	  else {
		  //accountService.login(req.body, authService.generateToken)
		  
		  // For POC:
			/*
			var header = {
				"alg": "HS256",
				"typ": "JWT"
			};
			var stringifiedHeader = crypto.enc.Utf8.parse(JSON.stringify(header));
			var encodedHeader = base64url(stringifiedHeader);

			var data = {
				"id": 7777,
				"username": req.body.email
			};
			var stringifiedData = crypto.enc.Utf8.parse(JSON.stringify(data));
			var encodedData = base64url(stringifiedData);
			var token = encodedHeader + "." + encodedData;
			
			var secret = env.auth_secret;
			var signature = crypto.HmacSHA256(token, secret);
			signature = base64url(signature);
			var signedToken = token + "." + signature;
			
			console.log("\t JWT header: "+JSON.stringify(header));
			console.log("\t JWT data:   "+JSON.stringify(data));
			console.log("\t JWT token:  "+token);
			console.log("\t JWT signed token:\n\t "+signedToken);
			*/
			
			signedToken = "blahblahblah.blahblahblah.blahblahblah";
			res.set('Authorization', signedToken);
			
			res.send("Congratulations, you just logged in!");
	  }
  });






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
