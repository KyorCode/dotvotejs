var EventEmitter = require('events').EventEmitter;
var express = require('express');
var path = require('path');
var doT = require('express-dot');

module.exports = function bootstrap(app,emitter){
    "use strict";
    
    if(!emitter){
        emitter = new EventEmitter();
    }
    
    if(!app){
        app = express();
    }
    
    app.set('views',path.join(__dirname,'views'))
    app.set('view engine','doT');
    app.engine('html',doT.__express);
    app.locals({
        layout : false
    });
    app.use(express.static(path.resolve(__dirname + '/../public')));
    
    
    
};