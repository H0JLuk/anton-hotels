'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Rooms_Services',
      [
        { RoomId: 1, ServiceId: 1 },
        { RoomId: 1, ServiceId: 2 },
        { RoomId: 1, ServiceId: 3 },
        { RoomId: 1, ServiceId: 4 },
        { RoomId: 2, ServiceId: 5 },
        { RoomId: 2, ServiceId: 6 },
        { RoomId: 2, ServiceId: 7 },
        { RoomId: 2, ServiceId: 8 },
        { RoomId: 2, ServiceId: 9 },
        { RoomId: 3, ServiceId: 2 },
        { RoomId: 3, ServiceId: 4 },
        { RoomId: 3, ServiceId: 6 },
        { RoomId: 3, ServiceId: 8 },
        { RoomId: 4, ServiceId: 1 },
        { RoomId: 4, ServiceId: 3 },
        { RoomId: 4, ServiceId: 5 },
        { RoomId: 4, ServiceId: 7 },
        { RoomId: 4, ServiceId: 9 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms_Services', null, {});
  },
};
