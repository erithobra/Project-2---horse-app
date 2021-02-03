'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer.belongsToMany(models.Horse, { 
        through: "TrainerHorse",
        foreignKey: "trainerId",
        otherKey: "horseId"
       });
      }
  };
  Trainer.init({
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    cell: DataTypes.STRING,
    age: DataTypes.INTEGER,
    skillLevel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};