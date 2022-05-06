'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rooms_Services extends Model {
    static associate(models) {}
  }

  Rooms_Services.init(
    {
      RoomId: {
        type: DataTypes.INTEGER,
        references: { model: 'Rooms', key: 'id' },
      },
      ServiceId: {
        type: DataTypes.INTEGER,
        references: { model: 'Services', key: 'id' },
      },
    },
    {
      sequelize,
      modelName: 'Rooms_Services',
      timestamps: false,
    },
  );

  return Rooms_Services;
};
