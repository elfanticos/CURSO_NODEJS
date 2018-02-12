'use strict'

var http        = require('http').createServer(webServer),
    form        = require('fs').readFileSync('assets/form.html'),
    querystring =  require('querystring'),
    util        = require('util'),
    dataString  = '';

const hostname  = '127.0.0.1';
const port      = 3000;

function webServer(req ,res) {
    if(req.method == 'GET') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(form);
    }
    if(req.method == 'POST') {
        req
            .on('data', function(data) {
                dataString += data;
            })
            .on('end', function() {
                var dataObject     = querystring.parse(dataString),
                    dataJSON       = util.inspect(dataObject),
                    templateString = `
                    Los datos que enviaste por POST  como string son: ${dataString}
                    Los datos que enviaste por POST  como objeto son: 
                    Los datos que enviaste por POST  como json son: ${dataJSON}
                    `;
                console.log(templateString);
                res.end(templateString);
            });
    }
}

http
    .listen(port, hostname, () => {
        console.log(`Corriengo el servidor http://${hostname}:${port}/`);
    });