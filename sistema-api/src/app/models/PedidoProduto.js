module.exports = (sequelize, DataTypes) => {
  const PedidoProduto = sequelize.define(
    'PedidoProduto',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      // id_pedido: DataTypes.INTEGER,
      // id_produto: DataTypes.INTEGER,
      // id_tipo: DataTypes.INTEGER,
      // id_tamanho: DataTypes.INTEGER,
      valor: DataTypes.DOUBLE
    },
    {
      freezeTableName: true,
      tableName: 'pedido_produto'
    }
  )

  PedidoProduto.associate = models => {
    PedidoProduto.belongsTo(models.Pedido, { foreignKey: 'id_pedido' })
    PedidoProduto.belongsTo(models.Produto, { foreignKey: 'id_produto' })
    PedidoProduto.belongsTo(models.Tipo, { foreignKey: 'id_tipo' })
    PedidoProduto.belongsTo(models.Tamanho, { foreignKey: 'id_tamanho' })
  }

  return PedidoProduto
}
