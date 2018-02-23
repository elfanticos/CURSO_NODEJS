'use strict'

var db = require('../server');

function getListMovie(response,error) {
	let sql = `SELECT * FROM movie`;
	sql = db.pgpromise.as.format(sql);
	db.conection.any(sql)
		.then(function(data) {
			response(data);
		}).catch(function(error) {
			error(error.message);
		});
}
module.exports = {
	getListMovie
}