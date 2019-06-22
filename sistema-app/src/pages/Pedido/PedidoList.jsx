import React, { Component } from 'react'
// import api from 'services/api'
// import { getUserID, getUser } from 'services/auth'
import socket from 'socket.io-client'
import config from 'config'

export default class PedidoList extends Component {
  state = { lista: [] }

  async componentDidMount() {
    this.subscribeToEvents()
  }

  subscribeToEvents = () => {
    const io = socket(config.baseURL)

    io.on('pedido store', data => {
      const { lista } = this.state
      const dados = { ...lista, data }
      this.setState({ lista: dados })
    })
  }

  render() {
    // const { error } = this.state
    return (
      <>
        <p>tstes</p>
      </>
    )
  }
}
