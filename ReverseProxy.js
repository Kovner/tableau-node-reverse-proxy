var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
	console.log(req);
	console.log("***************************************************");
	proxy.web(req,res, {target: "http://mkovner-vm"});
});

console.log("Listening on port 8888");
server.listen(8888);