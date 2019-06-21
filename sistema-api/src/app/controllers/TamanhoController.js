const { Tamanho } = require('../models')

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
      const list = await Tamanho.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await Tamanho.findByPk(req.params.id)

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      const tamanho = await Tamanho.create({ ...req.body })
      req.io.emit('tamanho store', tamanho)

      return res.json(tamanho)
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

    await Tamanho.update(body, { where: { id: id } })

    const updatedModel = await Tamanho.findByPk(id)
    req.io.emit('tamanho update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await Tamanho.destroy({ where: { id: id } })
    req.io.emit('tamanho delete', id)

    return res.json({ id })
  }
}

module.exports = new EnderecoController()
