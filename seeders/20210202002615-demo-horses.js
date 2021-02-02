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
        disp: "https://www.amazon.com/photos/shared/f_Xi1vwMQK26_QfEvMG1sA.tGqqeuzpXnHYwSjM8XCUmU",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
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
        disp: "pict",
        meds: "thyroid",
        lastworm: new Date(),
        lastshoe: new Date(),
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
        disp: "https://www.amazon.com/photos/shared/f_Xi1vwMQK26_QfEvMG1sA.tGqqeuzpXnHYwSjM8XCUmU",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
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
        disp: "pict",
        meds: "none",
        lastworm: new Date(),
        lastshoe: new Date(),
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Horses', null, {});
    
  }
};
