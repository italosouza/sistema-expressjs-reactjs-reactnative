import { combineReducers } from 'redux'

/**
 * Import each one of Ducks files
 */
import favorites from './favorites'
import pedidos from './pedidos'

/**
 * Combine them into global application
 */
export default combineReducers({ favorites, pedidos })
