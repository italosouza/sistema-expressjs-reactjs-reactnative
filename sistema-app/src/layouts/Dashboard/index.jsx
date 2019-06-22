import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { logout } from 'services/auth'
import dashboardRoutes from 'routes/dashboard'

import Header from 'components/Header'

import './App.scss'

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map(prop => {
      if (prop.redirect) return <Redirect from={prop.path} to={prop.to} key={prop.path} />
      return (
        <Route path={prop.path} component={prop.component} key={prop.path} />
      )
    })}
  </Switch>
)

class Dashboard extends React.Component {
  static propTypes = { history: PropTypes.shape({ push: PropTypes.func }).isRequired }

  handleLogout = event => {
    event.preventDefault()
    logout()
    const { history } = this.props
    history.push('/login')
  }

  render() {
    const { match } = this.props

    return (
      <div className="wrapper">
        <nav>
          <header>
            <span /> Sistema
          </header>

          <ul>
            <li>
              <span>Navegação</span>
            </li>
            <li>
              <Link to="/pedido">Pedidos</Link>
            </li>
            <li>
              <Link to="/pedido/edit/1">Detalhes</Link>
            </li>
            <li>
              <a href="/">Mapa</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <span>Outros</span>
            </li>
            <li>
              <a href="/">Sair</a>
            </li>
          </ul>
        </nav>

        <main>
          <Header match={match} />
          {switchRoutes}
        </main>
      </div>
    )
  }
}

export default Dashboard
