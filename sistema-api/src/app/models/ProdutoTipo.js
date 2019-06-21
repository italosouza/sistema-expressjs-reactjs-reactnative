module.exports = (sequelize, DataTypes) => {
  const ProdutoTipo = sequelize.define(
    'ProdutoTipo',
    {
      id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_tipo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      id_tamanho: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      valor: DataTypes.DOUBLE
    },
    {
      freezeTableName: true,
      tableName: 'produto_tipo'
    }
  )

  ProdutoTipo.associate = models => {
    ProdutoTipo.belongsTo(models.Produto, { foreignKey: 'id_produto' })
    ProdutoTipo.belongsTo(models.Tipo, { foreignKey: 'id_tipo' })
    ProdutoTipo.belongsTo(models.Tamanho, { foreignKey: 'id_tamanho' })
  }

  return ProdutoTipo
}
