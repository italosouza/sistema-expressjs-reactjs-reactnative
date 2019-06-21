'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido_produto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      id_pedido: {
        type: Sequelize.INTEGER,
        references: { model: 'pedido', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: { model: 'produto_tipo', key: 'id_produto' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      id_tipo: {
        type: Sequelize.INTEGER,
        references: { model: 'produto_tipo', key: 'id_tipo' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      id_tamanho: {
        type: Sequelize.INTEGER,
        references: { model: 'produto_tipo', key: 'id_tamanho' },
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
    return queryInterface.dropTable('pedido_produto')
  }
}
