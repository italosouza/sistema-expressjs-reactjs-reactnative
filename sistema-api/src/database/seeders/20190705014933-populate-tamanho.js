'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tamanho',
      [
        {
          name: 'Pequena',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Media',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Grande',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: '250ml',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: '1l',
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
      'tamanho',
      { name: { [Op.in]: ['Pequena', 'Media', 'Grande', '250ml', '1l'] } },
      {}
    )
  }
}
