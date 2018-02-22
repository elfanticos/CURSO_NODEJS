'use strict'

var express = require('express'),
	router  = express.Router();

function pug(req,res,next) {
	let locals = {
		title       : 'NUEVO',
		descripcion : 'también es posible anular un bloque para proporcionar bloques adicionales, como se muestra en el siguiente ejemplo. Como se ve, contentahora expone a sidebary primarybloque para anular. (Alternativamente, la plantilla secundaria podría anular por contentcompleto).'
	}
	res.render('index',locals);
}

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
	.get('/',(req,res) => {
		res.send('<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express</h1>');
	})
	.get('/pug',pug)
	.use(error404)

module.exports = router;