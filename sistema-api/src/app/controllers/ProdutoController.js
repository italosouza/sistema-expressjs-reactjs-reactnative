const { Produto } = require('../models')

class ProdutoController {
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
      const list = await Produto.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  async listarProdutosDisponiveis(req, res) {
    const filters = {}

    if (req.query.available) {
      filters.available = req.query.available
    }

    if (req.query.name) {
      filters.name = new RegExp(req.query.name, 'i')
    }

    try {
      const list = await Produto.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  async listarTipoPorProduto(req, res) {
    const filters = {}

    if (req.query.available) {
      filters.available = req.query.available
    }

    if (req.query.name) {
      filters.name = new RegExp(req.query.name, 'i')
    }

    try {
      const list = await Produto.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  async listarTamanhoPorProduto(req, res) {
    const filters = {}

    if (req.query.available) {
      filters.available = req.query.available
    }

    if (req.query.name) {
      filters.name = new RegExp(req.query.name, 'i')
    }

    try {
      const list = await Produto.findAll(filters)

      return res.json(list)
    } catch (err) {
      return res.json(err)
    }
  }

  /**
   * GET/:ID
   */
  async show(req, res) {
    const model = await Produto.findByPk(req.params.id)

    return res.json(model)
  }

  /**
   * POST
   */
  async store(req, res) {
    try {
      const produto = await Produto.create({ ...req.body })
      req.io.emit('produto store', produto)

      return res.json(produto)
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

    await Produto.update(body, { where: { id: id } })

    const updatedModel = await Produto.findByPk(id)
    req.io.emit('produto update', updatedModel)

    return res.json(updatedModel)
  }

  /**
   * DELETE/:ID
   */
  async destroy(req, res) {
    const { id } = req.params
    await Produto.destroy({ where: { id: id } })
    req.io.emit('produto delete', id)

    return res.json({ id })
  }
}

module.exports = new ProdutoController()
