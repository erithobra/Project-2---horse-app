'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Horses', 
    'trainerId', 
    { 
      type: Sequelize.INTEGER 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Horses');
  }
};
