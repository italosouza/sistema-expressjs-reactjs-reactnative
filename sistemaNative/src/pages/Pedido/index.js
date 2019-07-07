import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as PedidoActions } from '~/store/ducks/pedido'

import { navigate } from '~/services/navigation'

import fundo from '~/assets/images/header-background.png'

import {
  Container, Button, ButtonText, Error, SignText
} from './styles'

class Pedido extends React.Component {
  state = { loginData: {} }

  handleChangeInput = (field, value) => {
    const { loginData } = this.state
    const data = { ...loginData, [field]: value }
    this.setState({ loginData: data })
  }

  render() {
    const { error, loading } = this.props.pedido

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#002232" />
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <View>{!!error && <Error>{error}</Error>}</View>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  pedido: state.pedido
})

const mapDispatchToProps = dispatch => bindActionCreators(PedidoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pedido)
