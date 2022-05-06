'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rooms_photos extends Model {
    static associate(models) {
      this.belongsTo(models.Rooms_photos);
    }
  }

  Rooms_photos.init(
    {
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Rooms_photos',
    },
  );

  return Rooms_photos;
};
