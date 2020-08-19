'use strict';

const express = require('express');
// const notFound = require('./middleware/404.js');
// const serverError = require('./middleware/500.js');
const router = express.Router();

// =============================================================================
// Practice Routes from Class
router.get('/fruit', (req, res) => {
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

router.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type,
  };
  res.status(200).json(output);
});

router.get('/fruit-browser', (req, res) => {
  console.log('browser = ', req.browser);
  res.status(200).send('ok');
});
// =============================================================================
// Export
module.exports = router;