import { all, takeLatest } from 'redux-saga/effects'

import { Types as FavoritesTypes } from 'store/ducks/favorites'
import { addFavorite } from './favorites'

/**
 * Listens for actions
 */
export default function* rootSaga() {
  yield all([takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)])
}
