'use strict'

const http     = require('http').createServer(newServer);
var fs         = require('fs');
const hostname = '127.0.0.1';
const port     = 3000;

function newServer(req, res) {
    function readFile(err,data) {
        if(err) throw err
        res.end(data);
    }
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile('assets/index.html', readFile);
}

http
    .listen(port, hostname, () => {
        console.log(`Corriengo el servidor http://${hostname}:${port}/`);
    });