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
    // this.props.RequestListaPedidos()
    console.log(this.props)

    // try {
    //   const response = await api.get('/api/pedido')
    //   this.setState({ lista: response.data })
    // } catch (err) {
    //   console.warn(err)
    // }
  }

  subscribeToEvents = () => {
    const io = socket(config.baseURL)

    io.on('pedido store', data => {
      const { lista } = this.state
      lista.push(data)
      this.setState({ lista })
      // TODO: add redux
      // this.props.addFavoriteRequest(data)
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
            </div>
          </div>
        </GridContainer>

        <GridContainer>
          <div className="grid">
            <div className="grid-item large pedido">
              <div className="titulo">
                Pedido <strong>#1</strong> - Ítalo Andrade de souza
              </div>
              <small>há 2 segundos</small>
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
          </div>
        </GridContainer>

        <div className="flex-grid">
          {pedidos.data.map(pedido => (
            <div key={pedido.id}>
              <h2>
                <div>
                  Pedido: <strong>{pedido.id}</strong> Valor: R$ {pedido.valor}{' '}
                  -{' '}
                  <Moment fromNow locale="pt-br">
                    <strong>{pedido.createdAt}</strong>
                  </Moment>
                </div>
                <div>
                  <button type="button">OK</button>
                </div>
              </h2>
              <ul>
                <li>Pizza Calabresa media</li>
                <li>Pizza Peperoni pequena</li>
                <li>Refrigerante coca 1 litro</li>
              </ul>
            </div>
          ))}
        </div>
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
