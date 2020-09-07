'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      categoryName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      categoryDescription:{
        type: Sequelize.STRING,
        allowNull: false
      },
      categoryColor:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },   
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }   
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('categories');
  }
};
