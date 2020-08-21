'use strict';

const Model = require('../mongo.js');
const schema = require('./products-schema.js');

class Product extends Model {
}

module.exports = new Product(schema);