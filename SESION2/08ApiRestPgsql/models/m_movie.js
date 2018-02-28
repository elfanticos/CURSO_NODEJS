'use strict'

var db = require('../server');

function getListMovie(response) {
	let sql = `SELECT * FROM movie`;
	// sql = db.pgpromise.as.format(sql);
	db.conection.any(sql)
		.then(function(data) {
			response(data);
		}).catch(function(error) {
			response(error);
		});
}

function getDataMovie(movie_id,response) {
	var sql = `SELECT *
	             FROM movie
	            WHERE movie_id = $1`;
    sql = db.pgpromise.as.format(sql,[movie_id]);
    db.conection.one(sql)
		.then(function(data) {
			response(data);
		}).catch(function(error) {
			response(error);
		});
}

function updateMovie(data, response) {
	let sql = `UPDATE movie 
	              SET title    = $1,
	                  release  = $2,
	                  rating   = $3,
	                  image    = $4
	            WHERE movie_id = $5`;
	sql = db.pgpromise.as.format(sql,[data.title,data.release, data.rating, data.image, data.movie_id]);
	db.conection.result(sql)
		.then(function(data) {
			if(data.rowCount != 1) throw (new Error('Error al insertar.')); 
			response(data);
		}).catch(function(error) {
			response(error);
		});
}

function insertMovie(data,response) {
	let sql = `INSERT 
	             INTO movie (movie_id, title, release, rating, image)
	           VALUES ($1,$2,$3,$4,$5)`;
	sql = db.pgpromise.as.format(sql,[data.movie_id, data.title, data.release, data.rating, data.image]);
	db.conection.result(sql)
		.then(function(data) {
			if(data.rowCount != 1) throw (new Error('Error al insertar.')); 
			response(data);
		}).catch(function(error) {
			response(error);
		});
}

function deleteMovie(movie_id, response) {
	let sql = `DELETE FROM movie WHERE movie_id = $1`;
	sql = db.pgpromise.as.format(sql,[movie_id]);
	db.conection.result(sql)
		.then(function(data) {
			if(data.rowCount != 1) throw (new Error('Error al eliminar.')); 
			response(data);
		}).catch(function(error) {
			response(error);
		});
}

module.exports = {
	getListMovie,
	getDataMovie,
	updateMovie,
	insertMovie,
	deleteMovie
}