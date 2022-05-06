'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      this.belongsToMany(models.Room, {
        through: models.Rooms_Services,
        as: 'rooms',
      });
    }
  }

  Service.init(
    {
      photo: DataTypes.STRING,
      icon: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Service',
    },
  );

  return Service;
};
