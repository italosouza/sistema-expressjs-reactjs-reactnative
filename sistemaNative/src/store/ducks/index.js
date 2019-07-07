import { combineReducers } from 'redux'

import pedidos from './pedidos'
import login from './login'
import register from './register'

const reducers = combineReducers({ pedidos, login, register })

export default reducers
