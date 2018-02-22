'use strict'
const pgp = require("pg-promise")(),
      db  = pgp("postgres://postgres:jhonatan@localhost:5432/movies");
var   app = require('./app');

db.connect();

app.listen(app.get('port'), function() {
	console.log(`Iniciando Express en el puerto ${app.get('port')}`);
});

exports.conection = db;