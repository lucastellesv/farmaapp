const express = require('express');
const UserController = require('../src/controllers/UserController')

const routes = express.Router();

routes.get('/signup', UserController.show); // remover
routes.post('/signup', UserController.create);

 
module.exports = routes;