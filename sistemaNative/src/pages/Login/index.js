import React from 'react'
import { ActivityIndicator } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as LoginActions } from '~/store/ducks/login'

import { navigate } from '~/services/navigation'

import fundo from '~/assets/images/fundo.jpg'

import {
  Container, Input, Button, ButtonText, Error, SignText
} from './styles'

class Login extends React.Component {
  state = { loginData: {} }

  handleSubmit = async () => {
    const { loginData } = this.state
    const { loginRequest } = this.props
    loginRequest(loginData)
  }

  handleChangeInput = (field, value) => {
    const { loginData } = this.state
    const data = { ...loginData, [field]: value }
    this.setState({ loginData: data })
  }

  render() {
    const { error, loading } = this.props.login

    return (
      <Container source={fundo} resizeMode="cover">
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
          name="email"
          onChangeText={text => this.handleChangeInput('email', text)}
          required
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
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
        <SignText
          onPress={() => {
            navigate('Register')
          }}
        >
          Criar conta gratuita
        </SignText>
        {!!error && <Error>{error}</Error>}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
