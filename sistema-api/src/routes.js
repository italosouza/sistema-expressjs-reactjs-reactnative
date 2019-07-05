const express = require('express')
const routes = express.Router()

/**
 * VALIDATORS
 */
const validate = require('express-validation')
const validators = require('./app/validators')
const handler = require('express-async-handler')

const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

/**
 * MIDDLEWARES
 */
const authMiddleware = require('./app/middlewares/auth')

/**
 * CONTROLLERS
 */
const controllers = require('./app/controllers')

/**
 * ROTAS
 */

// usuario
routes.post(
  '/api/user',
  upload.single('avatar'),
  validate(validators.User),
  handler(controllers.UserController.store)
)

routes.post(
  '/api/session',
  validate(validators.Session),
  handler(controllers.SessionController.store)
)

routes.get('/files/:file', controllers.FileController.show)

// rotas a sequir requerem Token de autenticação
routes.use(authMiddleware)

// routes.post('/vm/leave/:id', handler(controllers.VmController.leave))

// user -
routes.get('/api/user', controllers.UserController.index)
routes.get('/api/user/:id', controllers.UserController.show)
// routes.post('/api/user', controllers.UserController.store)
routes.put('/api/user/:id', controllers.UserController.update)
routes.delete('/api/user/:id', controllers.UserController.destroy)

// endereco -
routes.get('/api/endereco', controllers.EnderecoController.index)
routes.get('/api/endereco/:id', controllers.EnderecoController.show)
routes.post('/api/endereco', controllers.EnderecoController.store)
routes.put('/api/endereco/:id', controllers.EnderecoController.update)
routes.delete('/api/endereco/:id', controllers.EnderecoController.destroy)

// produto -
routes.get('/api/produto', controllers.ProdutoController.index)
routes.get('/api/show/produto', controllers.ProdutoController.listarProdutosDisponiveis)
routes.get('/api/produto/:id', controllers.ProdutoController.show)
routes.post('/api/produto', controllers.ProdutoController.store)
routes.put('/api/produto/:id', controllers.ProdutoController.update)
routes.delete('/api/produto/:id', controllers.ProdutoController.destroy)

// tipo -
routes.get('/api/tipo', controllers.TipoController.index)
routes.get('/api/tipo/:id', controllers.TipoController.show)
routes.post('/api/tipo', upload.single('url'), controllers.TipoController.store)
routes.put('/api/tipo/:id', controllers.TipoController.update)
routes.delete('/api/tipo/:id', controllers.TipoController.destroy)

// tamanho -
routes.get('/api/tamanho', controllers.TamanhoController.index)
routes.get('/api/tamanho/:id', controllers.TamanhoController.show)
routes.post('/api/tamanho', controllers.TamanhoController.store)
routes.put('/api/tamanho/:id', controllers.TamanhoController.update)
routes.delete('/api/tamanho/:id', controllers.TamanhoController.destroy)

// produtotipo -
routes.get('/api/produtotipo', controllers.ProdutoTipoController.index)
routes.get('/api/produtotipo/:id', controllers.ProdutoTipoController.show)
routes.post('/api/produtotipo', controllers.ProdutoTipoController.store)
routes.put('/api/produtotipo/:id', controllers.ProdutoTipoController.update)
routes.delete('/api/produtotipo/:id', controllers.ProdutoTipoController.destroy)

// pedido -
routes.get('/api/pedido', controllers.PedidoController.index)
routes.get('/api/pedido/:id', controllers.PedidoController.show)
routes.post('/api/pedido', controllers.PedidoController.store)
routes.put('/api/pedido/:id', controllers.PedidoController.update)
routes.delete('/api/pedido/:id', controllers.PedidoController.destroy)

// pedidoproduto -
routes.get('/api/pedidoproduto', controllers.PedidoProdutoController.index)
routes.get('/api/pedidoproduto/:id', controllers.PedidoProdutoController.show)
routes.post('/api/pedidoproduto', controllers.PedidoProdutoController.store)
routes.put('/api/pedidoproduto/:id', controllers.PedidoProdutoController.update)
routes.delete('/api/pedidoproduto/:id', controllers.PedidoProdutoController.destroy)

module.exports = routes
