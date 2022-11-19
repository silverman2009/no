const port = process.env.PORT || 3001;
 
var http = require('http') ;
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
		target:'https://dzone.com/',
		secure : false, 
		xfwd : true
	}).listen(port);

proxy.on('error', function (err, req, res) {
	res.writeHead(500, {
		'Content-Type': 'text/plain'
	});
 
	res.end(err.toString());
	console.log(err)
});
