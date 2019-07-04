import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { isAuthenticated } from 'services/auth'
import Admin from 'layouts/Admin'
import Login from 'pages/Login'

// private routes can only be accessed by authed users - No ACL yet
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    exact
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    ))
    }
  />
)

PrivateRoute.propTypes = { component: PropTypes.func.isRequired }

const hist = createBrowserHistory()
const Routes = () => (
  <Router history={hist}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={Admin} />
    </Switch>
  </Router>
)

export default Routes
