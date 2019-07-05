'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tamanho',
      [
        {
          name: 'Pequena'
        },
        {
          name: 'Media'
        },
        {
          name: 'Grande'
        },
        {
          name: '250ml'
        },
        {
          name: '1l'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete(
      'tamanho',
      { name: { [Op.in]: ['Pequena', 'Media', 'Grande', '250ml', '1l'] } },
      {}
    )
  }
}
