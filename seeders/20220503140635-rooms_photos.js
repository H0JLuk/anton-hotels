'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Rooms_photos',
      [
        {
          photo: '/img/rooms/room-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 1,
        },
        {
          photo: '/img/rooms/room-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 1,
        },
        {
          photo: '/img/rooms/room-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 1,
        },

        {
          photo: '/img/rooms/room-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 2,
        },
        {
          photo: '/img/rooms/room-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 2,
        },
        {
          photo: '/img/rooms/room-4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 2,
        },

        {
          photo: '/img/rooms/room-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 3,
        },
        {
          photo: '/img/rooms/room-4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 3,
        },
        {
          photo: '/img/rooms/room-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 3,
        },

        {
          photo: '/img/rooms/room-1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 3,
        },
        {
          photo: '/img/rooms/room-3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 4,
        },
        {
          photo: '/img/rooms/room-2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          RoomId: 4,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms_photos', null, {});
  },
};
