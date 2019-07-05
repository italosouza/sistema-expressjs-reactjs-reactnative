import { all, takeLatest } from 'redux-saga/effects'

import { Types as PedidosTypes } from 'store/ducks/pedidos'
import { listRequest as listPedidoRequest } from './pedidos'

/**
 * Listens for actions
 */
export default function* rootSaga() {
  yield all([takeLatest(PedidosTypes.LIST_REQUEST, listPedidoRequest)])
}
