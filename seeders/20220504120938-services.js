'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Services',
      [
        {
          name: 'Infinity Pool',
          icon: 'img/services/service-icon-1.png',
          photo: 'img/services/service-1.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fitness Area',
          icon: 'img/services/service-icon-2.png',
          photo: 'img/services/service-2.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Shuttle',
          icon: 'img/services/service-icon-3.png',
          photo: 'img/services/service-3.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Restaurant',
          icon: 'img/services/service-icon-4.png',
          photo: 'img/services/service-4.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'City Guide',
          icon: 'img/services/service-icon-5.png',
          photo: 'img/services/service-5.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Day Trips',
          icon: 'img/services/service-icon-6.png',
          photo: 'img/services/service-6.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Spa & Sauna',
          icon: 'img/services/service-icon-7.png',
          photo: 'img/services/service-7.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Free Diving',
          icon: 'img/services/service-icon-8.png',
          photo: 'img/services/service-8.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Private Guide',
          icon: 'img/services/service-icon-9.png',
          photo: 'img/services/service-9.jpg',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  },
};
