'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clients', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      client_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      client_cpf:{
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },
      
      client_street:{
        type: Sequelize.STRING,
        allowNull: false
      },

      client_zipcode:{
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('clients');
      
  }
};
