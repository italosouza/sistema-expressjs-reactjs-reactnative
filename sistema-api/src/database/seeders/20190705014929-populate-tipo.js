'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tipo',
      [
        {
          name: 'Calabresa',
          url: '1.png'
        },
        {
          name: 'Peperoni',
          url: '2.png'
        },
        {
          name: 'Quatro-Queijos',
          url: '3.png'
        },
        {
          name: 'Portuguesa',
          url: '5.png'
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
