'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Horses', [
      {
        name:'Rocketman',
        bname: 'Rocketman',
        breed: 'Hackney',
        color: 'Black',
        age: "14",
        div: "Roadstery Pony",
        gender: "Stud",
        height: "14",
        weight: "744",
        disp: "https://i.imgur.com/6rOnq2b.png",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
        trainerId: 1
      },
      {
        name:'Heartland Rare Treat',
        bname: 'Rusty',
        breed: 'Hackney',
        color: 'bay',
        age: "23",
        div: "Show Pony",
        gender: "Gelding",
        height: "15",
        weight: "850",
        disp: "https://i.imgur.com/JuA5VZc.png",
        meds: "thyroid",
        lastworm: new Date(),
        lastshoe: new Date(),
        trainerId: 1
      },
      {
        name:'Poppy',
        bname: 'Paparrazi',
        breed: 'Saddlebred',
        color: 'Chestnut',
        age: "11",
        div: "3 Gaited Performace",
        gender: "Gelding",
        height: "17",
        weight: "1250",
        disp: "https://i.imgur.com/nB1E1rU.png",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
        trainerId: 2
      },
      {
        name:'Phoenix',
        bname: 'knucklehead',
        breed: 'quarter horse',
        color: 'chestnut',
        age: "2",
        div: "Roadstery Pony",
        gender: "Colt",
        height: "14",
        weight: "790",
        disp: "https://i.imgur.com/ZIZRHb8.png",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
        trainerId: 3
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Horses', null, {});
    
  }
};

