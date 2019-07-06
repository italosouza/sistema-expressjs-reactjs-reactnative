import React from 'react'
import PropTypes from 'prop-types'
import api from 'services/api'
import { login, isAuthenticated } from 'services/auth'

import GlobalStyle from './global'
import { LoginContainer } from './style'

export default class Login extends React.Component {
  static propTypes = { history: PropTypes.shape({ push: PropTypes.func }).isRequired }

  constructor(props) {
    super(props)
    this.state = { loginData: {} }

    if (isAuthenticated()) {
      const { history } = this.props
      history.push('/')
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({ mensagem: '' })

    const { history } = this.props

    try {
      const { loginData } = this.state
      const response = await api.post('/api/session', loginData)
      login(response.data)
      history.push('/')
    } catch (err) {
      this.setState({ mensagem: err.data.error })
    }
  }

  handleChange = event => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    const { loginData } = this.state
    const data = { ...loginData, [name]: value }
    this.setState({ loginData: data })
  }

  render() {
    const { mensagem } = this.state
    return (
      <>
        <GlobalStyle />
        <LoginContainer>
          <div className="login">
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  className="Textbox"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                />
                <input
                  className="Textbox"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={this.handleChange}
                />

                <div className="actions">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
            <div className="aviso">{!!mensagem && <span>{mensagem}</span>}</div>
          </div>
        </LoginContainer>
      </>
    )
  }
}
