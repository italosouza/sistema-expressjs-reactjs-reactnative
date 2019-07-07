import { call, put } from 'redux-saga/effects'
import api from '~/services/api'
import { navigate } from '~/services/navigation'

import { Creators as RegisterActions } from '~/store/ducks/register'

function registerPost(data) {
  return api.post('/api/user', data)
}

export function* registerRequest(action) {
  try {
    const { data } = action.payload
    const { response } = yield call(registerPost, data)

    yield put(RegisterActions.registerSuccess(response))
    navigate('Login')
  } catch (err) {
    yield put(RegisterActions.registerFailure(err.data.error))
  }
}
