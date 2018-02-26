'use strict'
var m_movie = require('../models/m_movie');

function index(req,res) {
	var promise = new Promise((resolve,reject) => {
		m_movie.getListMovie((response) => {
			return (response.message) ? reject(response) : resolve(response);
		});
	});
    promise
    	.then((resolved,rejected) => {
    		let locals = {
				title : 'Lista de Películas',
				data  : resolved
			}
			res.render('index',locals);
    	})
    	.catch((err) => {
    		let locals = {
				title       : 'Error '+err.code,
				description : err.message,
				error       : err
			};
			res.render('error',locals);
    	})
}

function addMovie(req,res) {
	res.render('add-movie',{title: 'Agregar Película'});
}

function regiMovie(req, res) {
	let data = req.body;
	let promise = new Promise((resolve,reject) => {
		m_movie.insertMovie(req.body,(response) => {
			return (response.message) ? reject(response) : resolve(true);
		});
	});
	promise
    	.then((resolved,rejected) => {
    		res.redirect('/');
    	})
    	.catch((err) => {
    		let locals = {
				title       : 'Error '+err.code,
				description : err.message,
				error       : err
			};
			res.render('error',locals);
    	})
}

function editMovie(req,res) {
	let movie_id = req.params.movie_id;
	let promise  = new Promise((resolve,reject) => {
		m_movie.getDataMovie(movie_id,(response) => {
			return (response.message) ? reject(response) : resolve(response);
		});
	});
    promise
    	.then((resolved,rejected) => {
    		let locals = {
				title : 'Editar Película',
				data  : resolved
			}
			res.render('edit-movie',locals);
    	})
    	.catch((err) => {
    		let locals = {
				title       : 'Error '+err.code,
				description : err.message,
				error       : err
			};
			res.render('error',locals);
    	})
}

function actulizarMovie(req,res) {
	let promise  = new Promise((resolve,reject) => {
		m_movie.updateMovie(req.body,(response) => {
			return (response.message) ? reject(response) : resolve(response);
		});
	});
    promise
    	.then((resolved,rejected) => {
    		res.redirect('/');
    	})
    	.catch((err) => {
    		let locals = {
				title       : 'Error '+err.code,
				description : err.message,
				error       : err
			};
			res.render('error',locals);
    	})
}

function deleteMovie(req,res) {
	let movie_id = req.params.movie_id;
	let promise  = new Promise((resolve,reject) => {
		m_movie.deleteMovie(movie_id,(response) => {
			return (response.message) ? reject(response) : resolve(response);
		});
	});
    promise
    	.then((resolved,rejected) => {
    		res.redirect('/');
    	})
    	.catch((err) => {
    		let locals = {
				title       : 'Error '+err.code,
				description : err.message,
				error       : err
			};
			res.render('error',locals);
    	})
}

module.exports = {
	index,
	addMovie,
	regiMovie,
	editMovie,
	actulizarMovie,
	deleteMovie
};