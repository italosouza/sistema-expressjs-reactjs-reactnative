import { all, takeLatest } from 'redux-saga/effects'

import { Types as PedidosTypes } from '~/store/ducks/pedidos'
import { listRequest as listPedidoRequest } from './pedidos'

import { Types as LoginTypes } from '~/store/ducks/login'
import { loginRequest } from './login'

export default function* rootSaga() {
  yield all([
    takeLatest(PedidosTypes.LIST_REQUEST, listPedidoRequest),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest)
  ])
}
