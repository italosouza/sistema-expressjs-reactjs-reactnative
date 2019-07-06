module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    'Endereco',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      bairro: DataTypes.STRING,
      cep: DataTypes.STRING
    },
    {
      freezeTableName: true,
      tableName: 'endereco'
    }
  )

  Endereco.associate = models => {
    Endereco.belongsTo(models.User, { foreignKey: 'id_usuario' })
  }

  return Endereco
}
