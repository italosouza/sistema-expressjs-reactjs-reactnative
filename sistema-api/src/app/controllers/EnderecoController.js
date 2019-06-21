const { Endereco } = require('../models')

class EnderecoController {
  /**
   * GET
   */
  async index(req, res) {
    const filters = {}

    if (req.query.available) {
      filters.available = req.query.available
    }

    if (req.query.name) {
      filters.name = new RegExp(req.query.name, 'i')
    }

    try {
      const list = await Endereco.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await Endereco.findByPk(req.params.id)

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      const { id_endereco: idEndereco } = req.body

      const endereco = await Endereco.create({ ...req.body, id_endereco: idEndereco })
      req.io.emit('endereco store', endereco)

      return res.json(endereco)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * PUT/:ID
   */
  async update(req, res) {
    const { body } = req
    const { id } = req.params

    await Endereco.update(body, { where: { id: id } })

    const updatedModel = await Endereco.findByPk(id)
    req.io.emit('endereco update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await Endereco.destroy({ where: { id: id } })
    req.io.emit('endereco delete', id)

    return res.json({ id })
  }
}

module.exports = new EnderecoController()
