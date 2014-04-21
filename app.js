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
		var status = "Down";
		if(stat){
			status = "Up";
		}
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ "status": status }));
	}
	
	
});

app.get("/static", function(req, res) {
	var status = "Down";
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ "status": status }));
	
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);