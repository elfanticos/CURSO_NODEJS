'use strict'

var express = require('express'),
    app     = express();

app
    .get('/', (req,res) => {
        res.send('<h1>Hello word!</h1>');
    })
    .listen(3000,() => {
        console.log('Example app listening on port 3000!');
    });