/**
 * Types
 */
export const Types = {
  LIST_REQUEST: 'pedidos/LIST_REQUEST',
  LIST_SUCCESS: 'pedidos/LIST_SUCCESS',
  LIST_FAILURE: 'pedidos/LIST_FAILURE',
  ADD_REQUEST: 'pedidos/ADD_REQUEST',
  ADD_SUCCESS: 'pedidos/ADD_SUCCESS',
  ADD_FAILURE: 'pedidos/ADD_FAILURE'
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
export default function pedidos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case Types.LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      }

    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }

    case Types.ADD_FAILURE:
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
  listRequest: () => ({
    type: Types.LIST_REQUEST,
    payload: {}
  }),

  listSuccess: data => ({
    type: Types.LIST_SUCCESS,
    payload: { data }
  }),

  listFailure: error => ({
    type: Types.LIST_FAILURE,
    payload: { error }
  }),

  addRequest: data => ({
    type: Types.ADD_REQUEST,
    payload: { data }
  }),

  /**
   * Called from Saga after Request
   * @param {*} data
   */
  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  /**
   *  Called from Saga after Request Failure
   */
  addFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
}
