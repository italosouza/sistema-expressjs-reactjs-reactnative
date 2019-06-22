import React from 'react'
// import PropTypes from 'prop-types'

import { connect } from 'react-redux'

const Header = () => <div>header</div>

const mapStateToProps = state => ({
  count: state.favorites.data.length
})

// Header.propTypes = {
//   count: PropTypes.number.isRequired,
// }

export default connect(mapStateToProps)(Header)
