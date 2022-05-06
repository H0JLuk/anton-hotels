'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      this.hasMany(models.Rooms_photos, {
        foreignKey: 'RoomId',
        as: 'photos',
      });

      this.hasMany(models.Orders, {
        // foreignKey: 'RoomId',
        // as: 'orders',
      });

      this.belongsToMany(models.Service, {
        through: models.Rooms_Services,
        as: 'services',
      });
    }
  }

  Room.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      description: DataTypes.TEXT,
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Room',
    },
  );

  return Room;
};
