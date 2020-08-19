// Execute a console.log() containing the request path, method, and the requestTime property of the request object

'use strict';

function logger (req, res, next) {
  console.log('__REQUEST__', req.method, req.path, req.timestamp);
  next();
}

module.exports = logger;