import React, { Component } from 'react'
import api from 'services/api'
// import { getUserID, getUser } from 'services/auth'
import socket from 'socket.io-client'
import config from 'config'

import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/pt-br'

export default class PedidoList extends Component {
  state = { lista: [] }

  async componentDidMount() {
    this.subscribeToEvents()
    const lista = await api.get('/api/pedido').catch(response => {
      this.setState(response.data)
      console.warn(response)
    })
    this.setState({ lista: lista.data })
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
    const { lista } = this.state
    console.log(this.state)
    return (
      <>
        <div className="flex-grid">
          {lista.map(pedido => (
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
