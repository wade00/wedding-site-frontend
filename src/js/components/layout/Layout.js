import React, { Component } from 'react'
import PropTypes from "prop-types"
import Navigation from "./Navigation"
import "./styles.css"
import Banner from './Banner';

const propTypes = {
  children: PropTypes.object.isRequired,
  sideMenu: PropTypes.bool.isRequired
}

class Layout extends Component {
  render() {
    const { children, sideMenu } = this.props
    const message = "Tara & Wade"
    return (
      <div className="container">
        <Banner message={message} />
        <div style={{ marginTop: message ? '2em' : '1em' }}>
          {sideMenu ? (
            <Navigation message={message} />
          ) : null}
          <div className={sideMenu ? "app-container" : ""}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = propTypes

export default Layout
