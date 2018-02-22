'use strict'

var express    = require('express'),
	path       = require('path'),
	favicon    = require('serve-favicon'),
	morgan     = require('morgan'),
	pug        = require('pug'),
	routes     = require('./routes/index'),
	faviconURL = `${__dirname}/public/img/favicon-node.png`,
	publicDir  = express.static(`${__dirname}/public`),
	viewDir    = `${__dirname}/views`,
	port       = (process.env.PORT || 3000),
	app        = express();

app
	//configurando app
	.set('views',viewDir)
	.set('view engine','pug')
	.set('port',port)
	//ejecutando middlewares
	.use(favicon(faviconURL))
	.use(publicDir)
	.use(morgan('dev'))
	//ejecuto el middleware Enrutador
	.use('/',routes);

module.exports = app;
