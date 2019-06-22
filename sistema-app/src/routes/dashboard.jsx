import PedidoRouter from 'pages/Pedido/PedidoRouter'

const dashboardRoutes = [
  {
    path: '/pedido',
    sidebarName: 'Pedidos',
    navbarName: 'Pedidos',
    // icon: Person,
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
