var express = require("express");
var app = express();

// Set up a URL route
app.get("/", function(req, res) {
	var options = {
	  host: 'www.makeyourwidget.com',
	  port: 80,
	  path: '/',
	  method: 'GET'
	};
	
	var stat = false;
	var http = require('http');

	var options = {
	  host: 'www.bbc.com',
	  path: '/'
	};

	callbackFunction = function(response) {	
		response.on('data', function (statCode) {
			if(response.statusCode == "200"){	
				stat = true;
			}
		});
		
		response.on('end', callback);
	}
	
	req = http.request(options, callbackFunction);
	req.end();
	
	function callback() {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "status": stat }));
	}
	
	
});

app.get("/static", function(req, res) {
	
	var stat = true;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ "status": stat }));
	
	
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);