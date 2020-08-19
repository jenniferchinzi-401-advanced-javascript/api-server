// Put the current timestamp (formatted like a proper date) on the request object in a property called requestTime

function addTimestamp (req, res, next) {
  let timestamp =  new Date();
  req.timestamp = timestamp;
  next();
}

module.exports = addTimestamp;
