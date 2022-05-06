'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      this.belongsTo(models.Room);
    }
  }

  Orders.init(
    {
      client_name: DataTypes.STRING,
      client_email: DataTypes.STRING,
      RoomId: {
        type: DataTypes.INTEGER,
        references: { model: 'Room', key: 'id' },
      },
      member_count: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Orders',
    },
  );
  return Orders;
};
