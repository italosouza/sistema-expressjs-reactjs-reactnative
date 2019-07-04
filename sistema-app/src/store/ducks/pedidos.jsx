/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'pedidos/ADD_REQUEST',
  LIST_REQUEST: 'pedidos/LIST_REQUEST',
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
  /**
   * Called from components, should be mapped in /sagas/index.jsx
   * @param {*} repository
   */
  addPedidoRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),

  RequestListaPedido: () => ({
    type: Types.LIST_REQUEST,
    payload: {}
  }),

  /**
   * Called from Saga after Request
   * @param {*} data
   */
  addPedidoSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  /**
   *  Called from Saga after Request Failure
   */
  addPedidoFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
}
