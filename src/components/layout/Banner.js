import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./styles.css"

const propTypes = {
  message: PropTypes.string.isRequired
}

class Banner extends Component {
  render() {
    const { message } = this.props
    return (
      message ? (
        <div className="banner-container">
          <h2>{message}</h2>
        </div>
      ) : null
    )
  }
}

Banner.propTypes = propTypes

export default Banner
