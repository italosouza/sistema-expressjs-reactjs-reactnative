module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      name: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'produto'
    }
  )

  return Produto
}
