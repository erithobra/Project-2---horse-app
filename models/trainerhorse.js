'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainerHorse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TrainerHorse.init({
    trainerId: DataTypes.INTEGER,
    horseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TrainerHorse',
  });
  return TrainerHorse;
};