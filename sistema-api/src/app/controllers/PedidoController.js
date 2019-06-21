const { Pedido } = require('../models')

class PedidoController {
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
      const list = await Pedido.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await Pedido.findByPk(req.params.id, { include: ['Endereco', 'User'] })

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      // const { id_produto: idPedido } = req.body

      const pedido = await Pedido.create({ ...req.body })
      req.io.emit('pedido store', pedido)

      return res.json(pedido)
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

    await Pedido.update(body, { where: { id: id } })

    const updatedModel = await Pedido.findByPk(id)
    req.io.emit('pedido update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await Pedido.destroy({ where: { id: id } })
    req.io.emit('pedido delete', id)

    return res.json({ id })
  }
}

module.exports = new PedidoController()
