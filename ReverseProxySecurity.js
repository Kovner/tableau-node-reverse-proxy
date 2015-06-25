var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
	console.log(req.url);
	console.log("***************************************************");
	if(!allowedUrl(req.url, "Region=West")) {
		console.log("View requested without filter parameter");
		res.end("You're naughty!")
	} else {
		proxy.web(req,res, {target: "http://mkovner-vm"});
	}
});

console.log("Listening on port 8888");
server.listen(8888);

function allowedUrl(url, restriction) {
	var containsViews = url.indexOf('/views/') >= 0;
	var containsRestriction = url.toLowerCase().indexOf(restriction.toLowerCase()) >= 0;
	return !containsViews || containsRestriction;
}