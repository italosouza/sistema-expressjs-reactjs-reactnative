import { combineReducers } from 'redux'

/**
 * Import each one of Ducks files
 */
import favorites from './favorites'

/**
 * Combine them into global application
 */
export default combineReducers({
  favorites
})
