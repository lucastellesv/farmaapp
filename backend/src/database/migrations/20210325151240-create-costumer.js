'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('costumer', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      costumer_name:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      costumer_cpf:{
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },
      
      costumer_street:{
        type: Sequelize.STRING,
        allowNull: false
      },

      costumer_zipcode:{
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
