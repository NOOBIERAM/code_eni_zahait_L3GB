'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Faq)
      this.hasMany(models.Comment)
      this.hasMany(models.Comment_response)
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth: DataTypes.DATE,
    birth_place: DataTypes.STRING,
    identity: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    sexe: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.role = "User"
  })
  return User;
};