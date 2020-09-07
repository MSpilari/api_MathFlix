'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('videos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      videoName:{
        type: Sequelize.STRING,
        allowNull: false
      },
      videoLink:{
        type: Sequelize.STRING,
        allowNull: false
      },
      videoImgLink:{
        type: Sequelize.STRING,
        allowNull: false
      },
      videoDescription:{
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
    await queryInterface.dropTable('videos');
    
  }
};
