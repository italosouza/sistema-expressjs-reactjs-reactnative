import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Header = ({ match }) => <h1>Pedidos {match.url}</h1>

Header.propTypes = { match: PropTypes.shape.isRequired }

const mapStateToProps = state => ({ count: state.favorites.data.length })

export default connect(mapStateToProps)(Header)
