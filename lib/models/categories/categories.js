'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema');

class Category extends Model {
}

module.exports = new Category(schema);