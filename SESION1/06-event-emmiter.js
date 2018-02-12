'use strict'

var EventEmitter = require('events').EventEmitter,
pub              = new EventEmitter();

pub.on('myevent', (message) => {
    console.log(message);
});

pub.once('myevent', (message) => {
    console.log('Se emite la primera vez: '+message);
});

pub.emit('myevent','Soy un emisor de evento');
pub.emit('myevent','Volviendo a emitir');