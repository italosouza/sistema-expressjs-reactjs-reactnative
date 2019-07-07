import { combineReducers } from 'redux'

import pedidos from './pedidos'
import login from './login'

const reducers = combineReducers({ pedidos, login })

export default reducers
