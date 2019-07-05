/**
 * component -> Action -> Reducer -> Saga -> Action
 */

import { combineReducers } from 'redux'

/**
 * Import each one of Ducks files
 */
import pedidos from './pedidos'

/**
 * Combine them into global application
 */
export default combineReducers({ pedidos })
