'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Impot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Impot.init({
    identity: DataTypes.STRING,
    motif: DataTypes.STRING,
    amount: DataTypes.STRING,
    annee: DataTypes.DATE,
    status : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Impot',
  });
  return Impot;
};