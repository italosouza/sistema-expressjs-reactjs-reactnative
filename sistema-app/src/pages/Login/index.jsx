import React from 'react'
import PropTypes from 'prop-types'
import api from 'services/api'
import { login, isAuthenticated } from 'services/auth'

import './Login.scss'
import avatar from 'assets/logo.png'

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
      this.setState({ mensagem: 'Não foi possível realizar o login' })
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
        <div className="container" />
        <div>
          <div className="login mds-3">
            <img
              id="Avimg"
              className="avatar mds-2"
              src={avatar}
              alt="avatar"
            />
            <div className="content">
              <form onSubmit={this.handleSubmit}>
                <input
                  className="Textbox"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                />
                <input
                  className="Textbox"
                  name="password"
                  id="passbox"
                  type="password"
                  placeholder="Senha"
                  onChange={this.handleChange}
                />
                {!!mensagem && <span>{mensagem}</span>}
                <div className="forgot-password">
                  <a href="/" id="fp-btn" className="btn-fp">
                    Esqueceu a senha?
                  </a>
                </div>
                <div>
                  <button type="submit" className="btn btn-log btn-normal">
                    Login
                  </button>
                  <button type="button" className="btn btn-log btn-register">
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}
