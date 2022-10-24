'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fetchAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fetchAnswer.init({
    answer_id: DataTypes.STRING,
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fetchAnswer',
  });
  return fetchAnswer;
};