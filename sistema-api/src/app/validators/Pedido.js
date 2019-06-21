const Joi = require('joi')

module.exports = {
  body: {
    id_usuario: Joi.number().required(),
    id_endereco: Joi.number().required(),
    valor: Joi.number().required()
  }
}
