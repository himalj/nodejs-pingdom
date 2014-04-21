var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
	var options = {
	  host: 'www.bbc.com',
	  port: 80,
	  path: '/',
	  method: 'GET'
	};
	var statCode = false;
	var http = require('http');
	var extReq = http.request(options, function(res) {
		if(extReq.statusCode == "200"){	
			statCode = true;
			console.log(statCode);
		}
		
	});
	extReq.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});
	extReq.end();
	
	if(statCode){
		res.send("status up");
	}
	

	
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);