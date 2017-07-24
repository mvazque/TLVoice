var Router = require('express').Router;

var tokenGeneratorStuff = require('./handler');
var tokenGenerator = tokenGeneratorStuff.tokenGenerator;
var voiceResponse = tokenGeneratorStuff.voiceResponse;

var router = new Router();
console.log("Hello");
console.log(tokenGeneratorStuff.tokenGenerator);
/**
 * Generate a Capability Token for a Twilio Client user - it generates a random
 * username for the client requesting a token.
 */
router.get('/token', function(req, res){
  res.send(tokenGenerator());
});

router.post('/voice', function(req, res){
  res.set('Content-Type', 'text/xml');
  res.send(voiceResponse(req.body.To));
});

module.exports = router;
