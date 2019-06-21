const { ProdutoTipo } = require('../models')

class ProdutoTipoController {
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
      const list = await ProdutoTipo.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await ProdutoTipo.findByPk(req.params.id, {
      include: ['Produto', 'Tipo', 'Tamanho']
    })

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      // const { id_produto: idProdutoTipo } = req.body

      const produtoTipo = await ProdutoTipo.create({ ...req.body })
      req.io.emit('produtoTipo store', produtoTipo)

      return res.json(produtoTipo)
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

    await ProdutoTipo.update(body, { where: { id: id } })

    const updatedModel = await ProdutoTipo.findByPk(id)
    req.io.emit('produtoTipo update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await ProdutoTipo.destroy({ where: { id: id } })
    req.io.emit('produtoTipo delete', id)

    return res.json({ id })
  }
}

module.exports = new ProdutoTipoController()
