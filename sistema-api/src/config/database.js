module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'coreapp-pass',
  database: 'coreapp',
  operatorAlias: true,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
