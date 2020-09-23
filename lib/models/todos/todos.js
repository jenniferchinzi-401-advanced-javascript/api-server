'use strict';

const Model = require('../mongo.js');
const schema = require('./todos-schema.js');

class Todo extends Model {
}

module.exports = new Todo (schema);