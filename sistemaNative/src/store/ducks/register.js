/**
 * Types
 */
export const Types = {
  REGISTER_REQUEST: 'register/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'register/REGISTER_SUCCESS',
  REGISTER_FAILURE: 'register/REGISTER_FAILURE'
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
export default function register(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }

    case Types.REGISTER_FAILURE:
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
  registerRequest: data => ({
    type: Types.REGISTER_REQUEST,
    payload: { data }
  }),

  registerSuccess: data => ({
    type: Types.REGISTER_SUCCESS,
    payload: { data }
  }),

  registerFailure: error => ({
    type: Types.REGISTER_FAILURE,
    payload: { error }
  })
}
