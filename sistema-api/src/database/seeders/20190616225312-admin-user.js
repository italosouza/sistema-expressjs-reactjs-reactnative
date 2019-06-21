'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuario',
      [
        {
          name: 'Administrador',
          email: 'admin@sistema.com',
          avatar: 'placeholder.png',
          created_at: Date.now(),
          updated_at: Date.now(),
          password_hash: '123',
          admin: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', { email: 'admin@sistema.com' }, {})
  }
}
