'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {}
  }

  Orders.init(
    {
      client_name: DataTypes.STRING,
      client_email: DataTypes.STRING,
      RoomId: DataTypes.INTEGER,
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
