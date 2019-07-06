module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      situacao: {
        type: DataTypes.CHAR,
        defaultValue: 'A'
      },
      valor: DataTypes.DOUBLE,
      obs: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'pedido'
    }
  )

  Pedido.associate = models => {
    Pedido.belongsTo(models.User, { foreignKey: 'id_usuario' })
    Pedido.belongsTo(models.Endereco, { foreignKey: 'id_endereco' })
    Pedido.hasMany(models.PedidoProduto, { as: 'PedidoProduto', foreignKey: 'id_pedido' })
  }

  return Pedido
}
