const { Tipo } = require('../models')

class TipoController {
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
      const list = await Tipo.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await Tipo.findByPk(req.params.id)

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      const tipo = await Tipo.create({ ...req.body })
      req.io.emit('tipo store', tipo)

      return res.json(tipo)
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

    await Tipo.update(body, { where: { id: id } })

    const updatedModel = await Tipo.findByPk(id)
    req.io.emit('tipo update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await Tipo.destroy({ where: { id: id } })
    req.io.emit('tipo delete', id)

    return res.json({ id })
  }
}

module.exports = new TipoController()
