'use strict'

var http = require('http').createServer(webServer),
    path = require('path'),
    url  = require('url'),
    urls = [
        {   id    : 1,
            route : '',
            output: '<h2>home</h2>'
        },
        {   id    : 2,
            route : 'acerca',
            output: '<h2>Acerca</h2>'
        },
        {   id    : 3,
            route : 'contacto',
            output: '<h2>Contacto</h2>'
        }
    ];

const hostname = '127.0.0.1';
const port     = 3000;

function webServer(req, res) {
    var message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url),
        id      = url.parse(req.url, true).query.id;
        console.log(url.parse(req.url,true).query);

        console.log(`path: ${pathURL} => id: ${id}`);
        urls.forEach(function(pos) {
            if(pos.route == pathURL) {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end(message+ pos.output);
            }
        });
        if(!res.finished) {
            res.writeHead(404, { 'Content-Type': 'text/html'});
            res.end('<h1>Error 404: Not Found</h1>');
        }
}

http
    .listen(port, hostname, () => {
        console.log(`Corriengo el servidor http://${hostname}:${port}/`);
    });