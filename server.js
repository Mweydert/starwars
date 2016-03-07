var express = require('express');
var app     = express();

app.get('/server', function(req, res){
	res.sendFile( __dirname  + '/test.html');
});

app.post('/server', function(req, res){
	res.sendFile( __dirname  + '/test.html');
	console.log("result ! ");
})

app.listen('8083');
console.log("The server is listening");
