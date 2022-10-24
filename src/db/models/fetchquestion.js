'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fetchQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fetchQuestion.init({
    question: DataTypes.STRING,
    anserwer: DataTypes.STRING,
    id_anserwer: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fetchQuestion',
  });
  return fetchQuestion;
};