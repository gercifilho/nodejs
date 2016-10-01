var http = require('http');
var porta = 3000;
var ip = "localhost";


http.createServer(function (req, res) {
    console.log('Recebendo request');
    res.writeHead(200, {'Content-Type': 'text\html'});
    res.end("<html><body>Uma mensagem para o gerci!</body></html>");
}).listen(porta, ip);

console.log("Servidor executando em htt://" + ip + ":" + porta);