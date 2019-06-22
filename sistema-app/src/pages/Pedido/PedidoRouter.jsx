import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import PedidoList from './PedidoList'
import PedidoCreate from './PedidoCreate'

const PedidoRouter = ({ match }) => (
  <>
    <Switch>
      <Route exact path={`${match.url}/`} component={PedidoList} />
      {/* <Route exact path={match.url + "/add"} component={PedidoCreate} /> */}
      <Route exact path={`${match.url}/edit/:id`} component={PedidoCreate} />
    </Switch>
  </>
)

PedidoRouter.propTypes = { match: PropTypes.shape.isRequired }

export default PedidoRouter
