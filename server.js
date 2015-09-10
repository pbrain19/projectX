var express = require('express');
var app = express();


app.use('/lib', express.static('bower_components'));
app.use('/public', express.static('app'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


// app.post('/fileUpload' , function(req, res) {

// 	var files = req.body


// });