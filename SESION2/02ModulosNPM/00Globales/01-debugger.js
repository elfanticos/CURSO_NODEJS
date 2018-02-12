'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

function newServer(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    // debugger;
    res.end('<h1>hello word</h1>');
}
const server = http.createServer(newServer);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//INSTALAR node-inspector -g (DE PREFERENCIA COMO GLOBAL)
