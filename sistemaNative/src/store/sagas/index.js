import { all, takeLatest } from 'redux-saga/effects'

import { Types as PedidoTypes } from '~/store/ducks/pedido'
import { listRequest as listPedidoRequest, pedidoRequest } from './pedido'

import { Types as LoginTypes } from '~/store/ducks/login'
import { loginRequest } from './login'

import { Types as RegisterTypes } from '~/store/ducks/register'
import { registerRequest } from './register'

export default function* rootSaga() {
  yield all([
    takeLatest(PedidoTypes.LIST_REQUEST, listPedidoRequest),
    takeLatest(PedidoTypes.PEDIDO_REQUEST, pedidoRequest),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(RegisterTypes.REGISTER_REQUEST, registerRequest)
  ])
}
