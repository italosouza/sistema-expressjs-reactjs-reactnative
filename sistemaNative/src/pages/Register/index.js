import React from 'react'
import { ActivityIndicator } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as RegisterActions } from '~/store/ducks/register'

import { navigate } from '~/services/navigation'

import fundo from '~/assets/images/fundo.jpg'

import {
  Container, Input, Button, ButtonText, Error, SignText
} from './styles'

class Register extends React.Component {
  state = { loginData: {} }

  handleSubmit = async () => {
    const { loginData } = this.state
    const { registerRequest } = this.props
    registerRequest(loginData)
  }

  handleChangeInput = (field, value) => {
    const { loginData } = this.state
    const data = { ...loginData, [field]: value }
    this.setState({ loginData: data })
  }

  render() {
    const { error, loading } = this.props.register

    return (
      <Container source={fundo} resizeMode="cover">
        <Input
          autoCorrect={false}
          placeholder="Nome completo"
          onChangeText={text => this.handleChangeInput('name', text)}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          onChangeText={text => this.handleChangeInput('email', text)}
        />
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha"
          onChangeText={text => this.handleChangeInput('password', text)}
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <ButtonText>Criar conta</ButtonText>
          )}
        </Button>
        <SignText
          onPress={() => {
            navigate('Login')
          }}
        >
          Ja tenho conta
        </SignText>
        {!!error && <Error>{error}</Error>}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  register: state.register
})

const mapDispatchToProps = dispatch => bindActionCreators(RegisterActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
