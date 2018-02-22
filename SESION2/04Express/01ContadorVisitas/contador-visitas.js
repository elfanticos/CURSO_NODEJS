'use strict'

var express       = require('express'),
    app           = express(),
    cookieParser  = require('cookie-parser'),
    cookieSession = require('cookie-session');

app
    .use(cookieParser())
    .use(cookieSession({secret : "secreto"}))
    .get('/', (req,res) => {
        req.session.visitas || (req.session.visitas = 0)
        let n = req.session.visitas++;
        res.send(`
            <h1>
                Hola desde Express, me has visitado ${n} veces.
            </h1>
        `);
    })
    .listen(3000,() => {
        console.log('Inciando desde puerto 3000!');
    });