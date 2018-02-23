'use strict'
var m_movie = require('../models/m_movie');

function index(req,res) {
		let locals = {
			title : 'Error 404',
			description : 'Recurso no encontrado',
			error : 'error'
		};
	res.render('error',locals);
}

module.exports = {
	index
};