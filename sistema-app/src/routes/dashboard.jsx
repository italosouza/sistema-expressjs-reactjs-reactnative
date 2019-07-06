import PedidoRouter from 'pages/Pedido/PedidoRouter'

const dashboardRoutes = [
  {
    path: '/pedido',
    sidebarName: 'Pedidos',
    navbarName: 'Pedidos',
    component: PedidoRouter
  },
  {
    redirect: true,
    path: '/',
    to: '/pedido',
    navbarName: 'Redirect'
  }
]

export default dashboardRoutes
