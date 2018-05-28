import React from 'react'
import PropTypes from 'prop-types'

const Greeting = props => (
  <div>Hi, { props.name }</div>
)

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting
