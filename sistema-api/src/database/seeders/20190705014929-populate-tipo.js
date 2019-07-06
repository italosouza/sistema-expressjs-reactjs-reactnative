'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tipo',
      [
        {
          name: 'Calabresa',
          url: '1.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Peperoni',
          url: '2.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Quatro-Queijos',
          url: '3.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Portuguesa',
          url: '5.png',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(
      'tipo',
      { name: { [Op.in]: ['Calabresa', 'Peperoni', 'Quatro-Queijos', 'Portuguesa'] } },
      {}
    )
  }
}
