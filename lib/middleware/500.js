// Sends a 500/Server Error message as the response (does not call .next())

'use strict';

function errorHandler (err, req, res, next){
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
}

module.exports = errorHandler;