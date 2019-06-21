module.exports = (sequelize, DataTypes) => {
  const Tamanho = sequelize.define(
    'Tamanho',
    {
      name: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'tamanho'
    }
  )

  return Tamanho
}
