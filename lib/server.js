'use strict';

// Libraries
const express = require('express');
require('dotenv').config();
const app = express();

// const fruitRouter = require('./routes.js');
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notFound = require('./middleware/404.js');
const serverError = require('./middleware/500.js');


// Global Middleware

//express.json steps in front of ALL requests and inspects each for a body, parse it as needed, and include it on the return
app.use(express.json()); 

app.use(timestamp);

app.use(logger);

//register the middleware - must be BEFORE fruitRouter because fruitRouter ends the chain
// app.use(logRequest);
// app.use(getBrowser);

//must be AFTER express.json if it needs to use express.json
// app.use(fruitRouter); 

// =============================================================================
// Temporary Databases

let categoryDB = [];
let productDB = [];

// =============================================================================
// Categories Routes

app.get('/categories', (req, res, next) => {
  // return all categories
  let count = categoryDB.length;
  let results = categoryDB;
  res.json({ count, results });
});
  
app.get('/categories/:id', (req, res, next) => {
  // return one category by id
  let id = req.params.id;
  let record = categoryDB.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});
  
app.post('/categories', (req, res, next) => {
  // create a new category
  let { name, display_name, description } = req.body;
  let record = { name, display_name, description };
  record.id =categoryDB.length +1;
  categoryDB.push(record);
  res.json(record);
});
  
app.put('/categories/:id', (req, res, next) => {
  // replace one category by id
  let idToUpdate = req.params.id;
  let { name, display_name, description } = req.body;
  let updatedCategory = { name, display_name, description, idToUpdate };
  categoryDB = categoryDB.map((record) => (record.id === parseInt(idToUpdate)) ? updatedCategory : record);
  res.json(updatedCategory);
});
  
app.delete('/categories/:id', (req, res, next) => {
  // deletes one category by id
  let id = req.params.id;
  categoryDB = categoryDB.filter((record) => record.id !== parseInt(id));
  res.json({});
});
  
// Patch Route?
  
// =============================================================================
// Products Routes

app.get('/products', (req, res, next) => {
// return all products
  let count = productDB.length;
  let results = productDB;
  res.json({ count, results });

});

app.get('/products/:id', (req, res, next) => {
  // return one products by id
  let id = req.params.id;
  let record = productDB.filter((record) => record.id === parseInt(id));
  res.json(record[0]);

});

app.post('/products', (req, res, next) => {
  // create a new product
  let { category, name, display_name, description } = req.body;
  let record = { category, name, display_name, description };
  record.id =productDB.length +1;
  productDB.push(record);
  res.json(record);

});

app.put('/products/:id', (req, res, next) => {
  // replace one products by id
  let idToUpdate = req.params.id;
  let { category, name, display_name, description } = req.body;
  let updatedProduct = { category, name, display_name, description, idToUpdate };
  productDB = productDB.map((record) => (record.id === parseInt(idToUpdate)) ? updatedProduct : record);
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res, next) => {
  // deletes one products by id
  let id = req.params.id;
  productDB = productDB.filter((record) => record.id !== parseInt(id));
  res.json({});
});

// Patch Route?

// =============================================================================
//JS Error Test Route

app.get('/bad', (req, res) => {
  throw new Error('No bueno');
});

//============================================================================

// Error Routes

// 404 Errors
app.use('*', notFound);

// 500 Errors/Failsafe
app.use(serverError);


// =============================================================================
// Sample Functions from Class

// function logRequest(req, res, next){
//   console.log('Now we are cooking with gas!');
//   next();
// }

// function getBrowser(req, res, next){
//   req.browser = req.headers['user-agent'];
//   next();
// }

// =============================================================================
// Export
module.exports = {
  server: app,
  start: port => {
    const PORT = port || process.env.PORT ||3000;
    app.listen(PORT, ()=> console.log(`listening on ${PORT}`));
  },
};