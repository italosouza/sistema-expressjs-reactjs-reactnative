import { call, put, select } from 'redux-saga/effects'
import api from '~/services/api'

import { Creators as PedidoActions } from '~/store/ducks/pedido'

export function* listRequest() {
  try {
    const { data } = yield call(api.get, '/api/pedido')

    yield put(PedidoActions.listSuccess(data))
  } catch (err) {
    yield put(PedidoActions.listFailure('Erro ao adicionar pedido'))
  }
}

export function* pedidoRequest(action) {
  try {
    const { data } = action.payload

    const isDuplicated = yield select(state => state.pedido.data.find(item => item.id === data.id))

    if (isDuplicated) {
      yield put(PedidoActions.pedidoFailure('Pedido duplicado'))
    } else {
      yield put(PedidoActions.pedidoSuccess(data))
    }
  } catch (err) {
    yield put(PedidoActions.pedidoFailure('Erro ao adicionar Pedido'))
  }
}
