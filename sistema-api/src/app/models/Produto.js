module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'produto'
    }
  )

  return Produto
}
