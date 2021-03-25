const express = require('express');
const UserController = require('../src/controllers/UserController')
const ClientController = require('../src/controllers/ClientController');

const routes = express.Router();



routes.get('/signup', UserController.show); // remover
routes.post('/signup', UserController.create);
routes.get('/registerClient', ClientController.show); 
routes.post('/registerClient', ClientController.create);

 
module.exports = routes;