import { all, takeLatest } from 'redux-saga/effects'

import { Types as FavoritesTypes } from 'store/ducks/favorites'
import { Types as PedidosTypes } from 'store/ducks/pedidos'
import { addFavorite } from './favorites'
import { listRequest as listPedidoRequest } from './pedidos'

/**
 * Listens for actions
 */
export default function* rootSaga() {
  yield all(
    [takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)],
    [takeLatest(PedidosTypes.LIST_REQUEST, listPedidoRequest)]
  )
}
