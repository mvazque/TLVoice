const dotenv = require('dotenv');
const cfg = {};

if (process.env.NODE_ENV !== 'test') {
  dotenv.config({path: '.env'});
} else {
  dotenv.config({path: '.env.example', silent: true});
}

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
cfg.accountSid = process.env.Account_SID;
cfg.authToken = process.env.Auth_Token;

cfg.twimlAppSid = process.env.twimlAppSid;
cfg.callerId = process.env.callerId;

// Export configuration object
module.exports = cfg;
