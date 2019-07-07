/**
 * Types
 */
export const Types = {
  LOGIN_REQUEST: 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'login/LOGIN_FAILURE'
}

/**
 * REDUCER initial state data
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
}

/**
 * Reducer
 * @param {*} state
 * @param {*} action
 */
export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }

    case Types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

/**
 * ACTIONS
 */
export const Creators = {
  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: { data }
  }),

  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data }
  }),

  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  })
}
