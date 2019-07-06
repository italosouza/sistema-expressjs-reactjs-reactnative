module.exports = (sequelize, DataTypes) => {
  const Tamanho = sequelize.define(
    'Tamanho',
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
      tableName: 'tamanho'
    }
  )

  return Tamanho
}
