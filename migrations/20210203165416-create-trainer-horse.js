'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TrainerHorses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trainerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      horseId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }, 
    {
      uniqueKeys: {
        actions_unique: {
          fields: ['horseId', 'trainerId']
        }
      }
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TrainerHorses');
  }
};