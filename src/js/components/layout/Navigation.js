import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./styles.css"

const propTypes = {
  message: PropTypes.string
}

class Navigation extends Component {
  render() {
    const { message } = this.props
    return (
      <div className="nav-container" style={{ top: message ? '2em' : '1em' }}>
        <ul>
          <li>Home</li>
          <li>Event Info</li>
          <li>Attractions</li>
          <li>Accommodations</li>
          <li>RSVP</li>
          <li>FAQ</li>
        </ul>
      </div>
    )
  }
}

Navigation.propTypes = propTypes

export default Navigation
