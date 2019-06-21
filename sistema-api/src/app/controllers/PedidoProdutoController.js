const { PedidoProduto } = require('../models')

class PedidoProdutoController {
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
      const list = await PedidoProduto.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await PedidoProduto.findByPk(req.params.id, {
      include: ['Pedido', 'Produto', 'Tipo', 'Tamanho']
    })

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      // const { id_produto: idPedidoProduto } = req.body

      const pedidoProduto = await PedidoProduto.create({ ...req.body })
      req.io.emit('pedidoProduto store', pedidoProduto)

      return res.json(pedidoProduto)
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

    await PedidoProduto.update(body, { where: { id: id } })

    const updatedModel = await PedidoProduto.findByPk(id)
    req.io.emit('pedidoProduto update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await PedidoProduto.destroy({ where: { id: id } })
    req.io.emit('pedidoProduto delete', id)

    return res.json({ id })
  }
}

module.exports = new PedidoProdutoController()
