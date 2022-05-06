module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Rooms_photos', 'RoomId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Rooms',
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Rooms_photos', 'RoomId');
  },
};
