var http = require('http');

http.createServer(function (req,res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Node.js application\n');
    }).listen(8082, "127.0.0.1");

console.log('Server is running at http://127.0.0.1:3000/');