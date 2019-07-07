import { call, put, select } from 'redux-saga/effects'
import api from '~/services/api'

import { Creators as PedidosActions } from '~/store/ducks/pedidos'

export function* loginRequest() {
  try {
    const { data } = yield call(api.get, '/api/session')

    yield put(PedidosActions.loginSuccess(data))
  } catch (err) {
    yield put(PedidosActions.loginFailure('Erro ao adicionar pedido'))
  }
}

export function* addPedido(action) {
  try {
    const { data } = action.payload

    const isDuplicated = yield select(state => state.pedidos.data.find(item => item.id === data.id))

    if (isDuplicated) {
      yield put(PedidosActions.addFailure('Pedido duplicado'))
    } else {
      yield put(PedidosActions.addSuccess(data))
    }
  } catch (err) {
    yield put(PedidosActions.addFailure('Erro ao adicionar Pedido'))
  }
}
