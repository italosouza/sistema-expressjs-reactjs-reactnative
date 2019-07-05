'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'produto',
      [
        {
          name: 'Pizza'
        },
        {
          name: 'Massas'
        },
        {
          name: 'Bebidas'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(
      'produto',
      { name: { [Op.in]: ['Pizza', 'Massas', 'Bebidas'] } },
      {}
    )
  }
}
