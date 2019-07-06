module.exports = (sequelize, DataTypes) => {
  const Tipo = sequelize.define(
    'Tipo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
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
