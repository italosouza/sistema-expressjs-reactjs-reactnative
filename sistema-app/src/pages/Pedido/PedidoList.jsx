import React, { Component } from 'react'
import socket from 'socket.io-client'
import config from 'config'

import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/pt-br'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PedidoActions } from 'store/ducks/pedidos'
import { GridContainer } from './style'

class PedidoList extends Component {
  async componentDidMount() {
    this.subscribeToEvents()

    const { listRequest } = this.props
    listRequest()
  }

  subscribeToEvents = () => {
    const io = socket(config.baseURL)

    io.on('pedido store', data => {
      const { addSuccess } = this.props
      addSuccess(data)
    })
  }

  render() {
    const { pedidos } = this.props

    return (
      <>
        <GridContainer>
          <div className="grid">
            <div className="grid-item">
              <h3>Últimos pedidos</h3>
              {pedidos.loading && <span>Carregando...</span>}
            </div>
          </div>
        </GridContainer>

        <GridContainer>
          <div className="grid">
            {pedidos.data.map(pedido => (
              <div className="grid-item large pedido" key={pedido.id}>
                <div className="titulo">
                  Pedido <strong>{pedido.id}</strong> - Ítalo Andrade de souza
                </div>
                <small>
                  <Moment fromNow locale="pt-br">
                    <strong>{pedido.createdAt}</strong>
                  </Moment>
                </small>
                <div className="valor">R$ 42,00</div>
                <hr />
                <GridContainer flexAlign="flex-start">
                  <div className="grid-item small">
                    <img src="imagens/Pizzas/1.png" alt="" />
                    <div>
                      <div>Pizza Calabresa</div>
                      <small>Tamanho: Média</small>
                    </div>
                  </div>
                </GridContainer>
                <hr />
                <div className="observacao">
                  <strong>Observações:</strong> Favor remover tomate
                </div>
              </div>
            ))}
          </div>
        </GridContainer>
      </>
    )
  }
}

const mapStateToProps = state => ({ pedidos: state.pedidos })

const mapDispatchToProps = dispatch => bindActionCreators(PedidoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PedidoList)
