const { getAll, create, getOne, remove, update } = require('../controllers/users.controllers');
const express = require('express');

const users = express.Router();

users.route("/users")
    .get(getAll)
    .post(create);

users.route("/users/:id")
    .get(getOne)
    .delete(remove)
    .put(update); 

module.exports = users;