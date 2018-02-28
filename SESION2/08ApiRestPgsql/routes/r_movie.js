'use strict'

var express    = require('express'),
	router     = express.Router(),
    controller = require('../controllers/c_movie');

function error404(req,res,next) {
	let error = new Error(),
		locals = {
			title : 'Error 404',
			description : 'Recurso no encontrado',
			error : error
		};
		error.status = 404;
	res.render('error',locals);
	next();
}

router
	.get('/', controller.index)
	.get('/agregar',controller.addMovie)
	.post('/registrar', controller.regiMovie)
	.get('/editar/:movie_id', controller.editMovie)
	.post('/actualizar/:movie_id', controller.actulizarMovie)
	.post('/eliminar/:movie_id', controller.deleteMovie)
	.use(error404);

module.exports = router;