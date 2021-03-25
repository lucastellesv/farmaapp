'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      cpf:{
        type: Sequelize.BIGINT(11),
        allowNull: false,
      },

      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      cnpj:{
        type: Sequelize.BIGINT(14),
        allowNull: false,
      },

      password:{
        type: Sequelize.STRING,
        allowNull: false,
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

  // down: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add reverting commands here.
  //    *
  //    * Example:
  //    * await queryInterface.dropTable('users');
  //    */
  // }
};
