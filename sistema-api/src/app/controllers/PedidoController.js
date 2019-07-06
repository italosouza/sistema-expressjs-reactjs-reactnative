const { Pedido, PedidoProduto, Produto, Tamanho, Tipo, User } = require('../models')

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
      const list = await Pedido.findAll({
        include: [
          {
            model: PedidoProduto,
            as: 'PedidoProduto',
            include: [{ model: Produto }, { model: Tamanho }, { model: Tipo }]
          },
          { model: User }
        ]
      })

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    try {
      const model = await Pedido.findByPk(req.params.id, {
        include: [
          {
            model: PedidoProduto,
            as: 'PedidoProduto',
            include: [{ model: Produto }, { model: Tamanho }, { model: Tipo }]
          },
          { model: User }
        ]
      })

      return res.json(model)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      const { produtos } = req.body
      const valorTotal = produtos.reduce((total, item) => total + item.valor, 0)

      req.body.valor = valorTotal
      const pedido = await Pedido.create({ ...req.body })

      produtos.map(item => (item.id_pedido = pedido.id))

      await PedidoProduto.bulkCreate(produtos)

      const pedidoFinal = await Pedido.findByPk(pedido.id, {
        include: [
          {
            model: PedidoProduto,
            as: 'PedidoProduto',
            include: [{ model: Produto }, { model: Tamanho }, { model: Tipo }]
          },
          { model: User }
        ]
      })
      req.io.emit('pedido store', pedidoFinal)

      return res.json(pedidoFinal)
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
