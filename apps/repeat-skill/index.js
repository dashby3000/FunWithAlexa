module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'repeat-skill');

var WELCOME = "Welcome to your first skill running on the IBM Bluemix platform. ";
var APPLAUSE = "<audio src=\'https://s3.amazonaws.com/dashby.alexa.audio/5_Sec_Crowd_Cheer.mp3\'/>";
var READY_TO_BEGIN = "Tell me a number to say.";
var RESPONSE1 = "You asked me to say the number ";
var RESPONSE2 = ", so here it is: ";
var GOODBYE = ". Thanks for playing. Goodbye.";

app.launch( function( request, response ) {
	response.say(WELCOME + APPLAUSE). reprompt(READY_TO_BEGIN).shouldEndSession(false);
} );


app.error = function( exception, request, response ) {
	console.log(exception);
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occurred ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"},
	  "utterances":[
		"say the number {1-100|number}",
		"give me the number {!-100|number}",
		"tell me the number {!-100|number}",
		"I want to hear you say the number {!-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');

    response.say(RESPONSE1 + number + RESPONSE2 + number + GOODBYE);
  }
);

module.exports = app;