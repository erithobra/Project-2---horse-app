'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Trainers', [
      {
        first:'Jane',
        last: 'Johnson',
        username: 'kenny',
        password: 'joe',
        img:"https://i.imgur.com/Bbwbtfe.png",
        address: '123 Dopper Dr',
        city: 'Denver',
        state: "Co",
        zip: "30812",
        cell: "323-456-7894",
        age: 24,
        trainerId: 1,
        skillLevel: 4,
      },
      {
        first:'Hanns',
        last: 'Hankersteiner',
        username: 'Lexy',
        password: 'joe',
        img:"https://i.imgur.com/dShEQw5.jpg",
        address: '986 Stanker Dr',
        city: 'Berlin',
        state: "WI",
        zip: "70812",
        cell: "812-856-5894",
        age: 44,
        trainerId: 2,
        skillLevel: 2,
      },
      {
        first:'Aliciafransco',
        last: 'Snootyful',
        username: 'liz',
        password: 'joe',
        img:"https://i.imgur.com/vvXZ9xv.jpg",
        address: '888 Egomaniac Dr',
        city: 'New York',
        state: "NY",
        zip: "10812",
        cell: "541-856-5894",
        age: 54,
        trainerId: 3,
        skillLevel: 3,
      },
      {
        first:'Kelly',
        last: 'Tasch',
        username: 'johnny',
        password: 'joe',
        img:"https://i.imgur.com/Wx6Tsqy.jpg",
        address: '695 Chedder Dr',
        city: 'Stinky',
        state: "IN",
        zip: "70812",
        cell: "951-885-7894",
        age: 51,
        trainerId: 4,
        skillLevel: 2,
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Trainers', null, {});
    
  }
};
