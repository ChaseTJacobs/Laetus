var db = require("./dbService");
var authService = 	require('./authService');
// var cryptoUtil = require("./cryptoUtil");

/* Log In:
	1) validate user info
	2) check user actually exists
	3) generate JWT
	4) respond to client
*/
exports.login = function(reqBody, callback){
	
}


/* Create Account:
	1) validate user info
	2) check user doesn't already exist
	3) insert new user into DB
	4) respond to client
*/
exports.createAccount = function(reqBody, callback){
	/* 1 - TODO */
	/* 2 - TODO */
	/* 3 */
	db.query("CALL addUser(?,?,?)", 
				[reqBody.username, reqBody.password, reqBody.userInfo], 
				function(err, queryResult){
					/* 4 */
					if(err)
						callback("createAccount unsuccessful :( ");
					else
						callback("createAccount successful!!! :D ");
				});
}


/* Get User Info:
	1) validate user info
	2) Retrieve user info (or not) from DB
	3) respond to client
*/
exports.getUserInfo = function(reqBody, callback){
	/* 1 - TODO */
	/* 2 */
	console.log("\t in getUserInfo()");
	db.query("CALL getUserInfo(?,?)", 
				[reqBody.username, reqBody.password], 
				function(err, queryResult){
					/* 3 */
					if(err){
						console.log("problems...");
						callback("Unable to retrieve user info :( ");
					}else{
						if(! queryResult[0].length > 0)
							callback("User doesn't exist >:[ ");
						else
							callback(queryResult);//(queryResult[0][0].user_info);
					}
				});
}

