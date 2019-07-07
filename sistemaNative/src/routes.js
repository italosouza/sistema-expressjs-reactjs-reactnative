import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from '~/pages/Main'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import Pedido from '~/pages/Pedido'

const Routes = createAppContainer(
  createSwitchNavigator({
    Pedido,
    Login,
    Register,
    Main
  })
)

export default Routes
