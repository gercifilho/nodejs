var app = require('./custom-express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

var server = http.listen(3001, function(){

	var host = server.address().address;
	var port = server.address().port;
	console.log('Servidor executando em http//:%s:s%s',
		host, port);
})
