var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer({
  certificate: null,     // If you want to create an HTTPS server, pass in the PEM-encoded certificate and key
  key: null,             // If you want to create an HTTPS server, pass in the PEM-encoded certificate and key
  formatters: null,      //  Custom response formatters for res.send()
  log: null,             // You can optionally pass in a bunyan instance; not required
  name: 'node-api',      // By default, this will be set in the Server response header, default is restify
  spdy: null,            // Any options accepted by node-spdy
  version: '1.1.3',      // A default version to set for all routes
  handleUpgrades: false  // Hook the upgrade event from the node HTTP server, pushing Connection: Upgrade requests through the regular request handling chain; defaults to false
});

server.get('/', function(req, res, next){
	var data = {
		"test": "blalbalbla"
	};
	res.json(data);
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});