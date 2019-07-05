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
          password_hash: '$2a$08$hWroPAqtY3wAniorUOMH3OTBsAzbMnRM1mZRHn7l2JDygE7FYO2rS', // 123456
          admin: true
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('users', { email: { [Op.eq]: 'admin@sistema.com' } }, {})
  }
}
