'use strict'

var http = require('http'),
    options =  {
        host : 'jhomein.com',
        port : 3000,
        path : '/'
    }
http.get(options, function(res) {
console.log(`El sitio ${options.host} ha respondido. Código de estado: ${res.statusCode}`);
}).on('error', function(err) {
    console.log(`El sitio ${options.host} no respondió. Código de estado: ${err.code}. Error: ${err.message}`);
});