module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      situacao: {
        type: DataTypes.CHAR,
        defaultValue: 'A'
      },
      valor: DataTypes.DOUBLE
    },
    {
      freezeTableName: true,
      tableName: 'pedido'
    }
  )

  Pedido.associate = models => {
    Pedido.belongsTo(models.User, { foreignKey: 'id_usuario' })
    Pedido.belongsTo(models.Endereco, { foreignKey: 'id_endereco' })
  }

  return Pedido
}
