/**
 * Types
 */
export const Types = {
  LIST_REQUEST: 'pedido/LIST_REQUEST',
  LIST_SUCCESS: 'pedido/LIST_SUCCESS',
  LIST_FAILURE: 'pedido/LIST_FAILURE',
  PEDIDO_REQUEST: 'pedido/PEDIDO_REQUEST',
  PEDIDO_SUCCESS: 'pedido/PEDIDO_SUCCESS',
  PEDIDO_FAILURE: 'pedido/PEDIDO_FAILURE'
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
export default function pedido(state = INITIAL_STATE, action) {
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

  pedidoRequest: data => ({
    type: Types.PEDIDO_REQUEST,
    payload: { data }
  }),

  /**
   * Called from Saga after Request
   * @param {*} data
   */
  pedidoSuccess: data => ({
    type: Types.PEDIDO_SUCCESS,
    payload: { data }
  }),

  /**
   *  Called from Saga after Request Failure
   */
  pedidoFailure: error => ({
    type: Types.PEDIDO_FAILURE,
    payload: { error }
  })
}
