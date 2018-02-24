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

module.exports = {
	index
};