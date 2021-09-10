'use strict';
var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salonCars', [
      {
        brand: 'audi',
        model: 'A7',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'audi',
        model: 'TT',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'ferrari',
        model: 'california',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'jaguar',
        model: 'f-type',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'jaguar',
        model: 'xj',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'lamborghini',
        model: 'aventador',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'lexus',
        model: 'gs',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'mercedes',
        model: 'C-klasse',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
      {
        brand: 'tesla',
        model: 'model-X',
        color: faker.commerce.color(),
        horsepower: faker.finance.creditCardCVV(),
        price: faker.datatype.number(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
