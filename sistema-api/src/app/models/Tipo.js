module.exports = (sequelize, DataTypes) => {
  const Tipo = sequelize.define(
    'Tipo',
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'tipo'
    }
  )

  return Tipo
}
