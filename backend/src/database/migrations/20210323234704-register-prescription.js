'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('register', { 
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

      doctor_crm:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      registrated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      client_cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }

    });
     
  },

  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }
};
