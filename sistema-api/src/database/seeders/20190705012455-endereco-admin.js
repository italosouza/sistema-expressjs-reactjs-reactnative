'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'endereco',
      [
        {
          name: 'Nome da Rua',
          id_usuario: 1,
          logradouro: 'Logradouro',
          numero: 123,
          bairro: 'Bairo',
          cep: '12345-567',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('endereco', { name: { [Op.eq]: 'Nome da Rua' } }, {})
  }
}
