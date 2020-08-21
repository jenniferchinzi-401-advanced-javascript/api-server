'use strict';

// =============================================================================

const express = require('express');
const Products = require('../models/products/products');
const products = new Products();
const router = express.Router();

// =============================================================================
// Products Routes

router.get('/', getProduct);
  
router.get('/:id', getOneProduct);
  
router.post('/', createProduct);
  
router.put('/:id', updateProduct);
  
router.delete('/:id', deleteProduct);
  
// Patch Route?  

// =============================================================================
// Products Functions

function getProduct(req, res, next){
  products.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getOneProduct(req, res, next){
  products.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createProduct(req, res, next){
  products.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function updateProduct(req, res, next){
  products.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function deleteProduct(req, res, next){
  products.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}


// =============================================================================
// Export
module.exports = router;