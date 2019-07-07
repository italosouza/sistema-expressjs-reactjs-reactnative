import React from 'react'

import { Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Creators as LoginActions } from '~/store/ducks/login'

import { Container } from './styles'

const Login = () => (
  <Container>
    <Text>LOGIN</Text>
  </Container>
)

const mapStateToProps = state => ({
  login: state.login
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
