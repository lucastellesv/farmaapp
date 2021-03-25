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

      client_id:{
       type: Sequelize.INTEGER,
       allowNull: false,
       refereces: {model: 'clients', key: 'id'},
       onUpdate:'CASCADE',
       onDelete:'SET NULL'
      },

      doctor_crm:{
        type: Sequelize.INTEGER,
        allowNull: false
      },

      prescription_date: {
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

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('clients');
      
  }
};
