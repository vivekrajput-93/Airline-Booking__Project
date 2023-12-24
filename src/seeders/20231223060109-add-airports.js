'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name : 'Indira Gandhi International Airport',
        cityId : 6,
        createdAt : new Date(),
        updatedAt: new Date(),
      },
      {
        name : ' Safdarjung Airport',
        cityId : 6,
        createdAt : new Date(),
        updatedAt: new Date(),
      },
      {
        name : 'J P Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt: new Date(),
      },
      {
        name : 'Darbhanga Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
