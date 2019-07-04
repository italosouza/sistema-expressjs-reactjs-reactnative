'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@sistema.com',
          avatar: 'placeholder.png',
          created_at: new Date(),
          updated_at: new Date(),
          password_hash: 'admin',
          admin: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [
      {
        email: 'admin@sistema.com'
      }
    ])
  }
}
