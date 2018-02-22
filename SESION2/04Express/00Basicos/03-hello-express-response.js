'use strict'

var express = require('express'),
    app     = express();

app
    .get('/', (req,res) => {
        res.send('<h1>Hola Mundo desde Express</h1>');
    })
    .get('/pepa', (req,res) => {
        console.log('entra');
        res.redirect(301, 'http://www.youtube.com');
    })
    .get('/json', (req,res) => {
        res.json({
            name   :"Jhonatan",
            age    : 31,
            correo : "dart.bekicfox@gmail.com" 
        });
    })
    .listen(3000,() => {
        console.log('Example app listening on port 3000!');
    });