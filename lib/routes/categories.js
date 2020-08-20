'use strict';

// =============================================================================

const express = require('express');
const Categories = require('../models/categories/categories-model');
const categories = new Categories();
const router = express.Router();

// =============================================================================
// Categories Routes

router.get('/', getCategory);
  
router.get('/:id', getOneCategory);
  
router.post('/', createCategory);
  
router.put('/:id', updateCategory);
  
router.delete('/:id', deleteCategory);
  
// Patch Route?

// =============================================================================
// Categories Functions

function getCategory(req, res, next){
  categories.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getOneCategory(req, res, next){
  categories.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createCategory(req, res, next){
  categories.create(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function updateCategory(req, res, next){
  categories.update(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function deleteCategory(req, res, next){
  categories.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

// =============================================================================
// Export
module.exports = router;