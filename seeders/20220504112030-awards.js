'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Awards',
      [
        {
          photo: '/img/about/award-img.png',
          name: 'Best Hotel in Europe',
          value: 'ELITE HOTEL AWARD',
          year: 2011,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: '/img/about/award-img.png',
          name: 'Best Services',
          value: 'ELITE HOTEL AWARD',
          year: 2012,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: '/img/about/award-img.png',
          name: 'Best Hotel Spa',
          value: 'ELITE HOTEL AWARD',
          year: 2014,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: '/img/about/award-img.png',
          name: 'Best Luxury Hotel',
          value: 'ELITE HOTEL AWARD',
          year: 2016,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: '/img/about/award-img.png',
          name: '2nd Place @ Best Hotel',
          value: 'ELITE HOTEL AWARD',
          year: 2018,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: '/img/about/award-img.png',
          name: 'Best Hotel Spa',
          value: 'ELITE HOTEL AWARD',
          year: 2021,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiselit. Vivamus libero mauris, bibendum eget sapien ac, ultrices rhoncus ipsum. Donec nec sapien in urna.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Awards', null, {});
  },
};
