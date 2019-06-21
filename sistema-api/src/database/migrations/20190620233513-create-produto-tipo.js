'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto_tipo', {
      id_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'produto', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        references: { model: 'tipo', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      id_tamanho: {
        type: Sequelize.INTEGER,
        references: { model: 'tamanho', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produto_tipo')
  }
}
