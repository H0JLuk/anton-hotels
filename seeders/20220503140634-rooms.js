'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Rooms',
      [
        {
          title: 'Deluxe Suite',
          subtitle: 'A MEMORABLE HOLLIDAY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Twin Room With Seaview',
          subtitle: 'A MEMORABLE HOLLIDAY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Double Room',
          subtitle: 'A MEMORABLE HOLLIDAY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Twin Room With Seaview',
          subtitle: 'A MEMORABLE HOLLIDAY',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultricies volutpat tellus.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
