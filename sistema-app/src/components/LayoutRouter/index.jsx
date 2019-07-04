import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import dashboardRoutes from 'routes/dashboard'

const LayoutRouter = (
  <Switch>
    {dashboardRoutes.map(prop => {
      if (prop.redirect) {
        return <Redirect from={prop.path} to={prop.to} key={prop.path} />
      }
      return (
        <Route path={prop.path} component={prop.component} key={prop.path} />
      )
    })}
  </Switch>
)

export default LayoutRouter
