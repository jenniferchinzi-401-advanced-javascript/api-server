// Sends a 404/Not-Found message as the response (does not call .next())

'use strict';

function notFound(req, res, next){
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'Not Found' });
}

module.exports = notFound;