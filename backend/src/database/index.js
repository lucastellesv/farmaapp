const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Client = require('../models/Client');

const connection = new Sequelize(dbConfig);

User.init(connection);
Client.init(connection);

module.exports = connection;