'use strict'

var express = require('express'),
    app     = express();

app
    .get('/', (req,res) => {
        res.end('<h1>Hola Mundo desde Express');
    })
    .get('/user/:id-:name-:age', (req,res) => {
        res.end(`<h1> ${req.params.name} Bienvenido a Express :)  tu id es : ${req.params.id}
                y tu edad es ${req.params.age} 
               </h1>`);
    })
    .get('/search', (req, res) => {
        console.log(req.query);
        res.end(`
            <h1>Bienvenido a Express , los resultados de tu b&uacute;squeda son:
            <mark>${req.query.s}</mark>
        `);
    })
    .listen(3000,() => {
        console.log('Example app listening on port 3000!');
    });