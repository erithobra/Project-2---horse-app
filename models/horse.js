'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Horse.init({
    name: DataTypes.STRING,
    bname: DataTypes.STRING,
    breed: DataTypes.STRING,
    color: DataTypes.STRING,
    age: DataTypes.STRING,
    div: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    disp: DataTypes.STRING,
    meds: DataTypes.STRING,
    lastworm: DataTypes.DATE,
    lastshoe: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Horse',
  });
  return Horse;
};