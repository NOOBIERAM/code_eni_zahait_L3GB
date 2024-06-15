'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Demande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Demande.init({
    userId: DataTypes.INTEGER,
    serviceId: DataTypes.INTEGER,
    date_demande: DataTypes.DATE,
    status_demande: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Demande',
  });

  Demande.beforeCreate(async (user) => {
    user.status_demande = "En attente"
  })

  return Demande;
};