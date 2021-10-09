'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      author: 'Tokien',
      title: 'O Senhor dos Anéis',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      author: 'Rowling',
      title: 'Harry Potter',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      author: 'Martin',
      title: 'As Crônicas de Gelo e Fogo',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
}
