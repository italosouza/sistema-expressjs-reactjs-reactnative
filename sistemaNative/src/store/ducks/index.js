import { combineReducers } from 'redux'

import pedido from './pedido'
import login from './login'
import register from './register'

const reducers = combineReducers({ pedido, login, register })

export default reducers
