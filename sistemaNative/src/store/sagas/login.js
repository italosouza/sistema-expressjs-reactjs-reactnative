import { call, put } from 'redux-saga/effects'
import api from '~/services/api'
import { navigate } from '~/services/navigation'

import { Creators as LoginActions } from '~/store/ducks/login'

export function* loginRequest(action) {
  try {
    const { data } = action.payload
    const { response } = yield call(api.login, data)

    yield put(LoginActions.loginSuccess(response))
    navigate('Pedido')
  } catch (err) {
    yield put(LoginActions.loginFailure(err.data.error))
  }
}
