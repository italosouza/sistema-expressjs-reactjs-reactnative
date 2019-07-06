'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'produto',
      [
        {
          name: 'Pizza',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Massas',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Bebidas',
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
      'produto',
      { name: { [Op.in]: ['Pizza', 'Massas', 'Bebidas'] } },
      {}
    )
  }
}
