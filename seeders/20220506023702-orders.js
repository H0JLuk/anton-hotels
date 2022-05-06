'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          client_name: 'Anton',
          client_email: 'im@cl.own',
          RoomId: 1,
          member_count: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_name: 'Maxim',
          client_email: 'max@gmail.com',
          RoomId: 3,
          member_count: 3,
          message: 'send check on my mail please',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
