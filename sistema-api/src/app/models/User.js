const bcrypt = require('bcryptjs')
const authConfig = require('../../config/auth')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    },
    {
      freezeTableName: true,
      tableName: 'users'
    }
  )

  // User.associate = models => {
  //   User.hasMany(models.Endereco, { foreignKey: 'id_usuario' })
  // }

  User.prototype.isAdmin = function() {
    return !!this.dataValues.admin
  }

  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.dataValues.password_hash)
  }

  User.prototype.compareHash = function(password) {
    return bcrypt.compare(password, this.dataValues.password_hash)
  }

  User.prototype.generateToken = function(id) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }

  return User
}
