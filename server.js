'use strict';

var AlexaAppServer = require( 'alexa-app-server');
var dash = require('appmetrics-dash');
dash.attach({title: 'FunWithAlexa NodeJS Metrics Dashboard'});

var server = new AlexaAppServer( {
	httpsEnabled: false,
	port: process.env.PORT || 80
} );

server.start();