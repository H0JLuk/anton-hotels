'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Award extends Model {
    static associate(models) {}
  }

  Award.init(
    {
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      value: DataTypes.STRING,
      year: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Award',
    },
  );

  return Award;
};
