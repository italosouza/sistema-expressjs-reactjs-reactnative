// application server
const appServer = require('./server')

// http server - used with socket.io
var http = require('http').Server(appServer.express)
const ioServer = require('./ioServer')(http, appServer)

appServer.configIoMiddleware(ioServer)
appServer.routes()

http.listen(process.env.PORT || 8000, function() {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT || 8000}`)
})
