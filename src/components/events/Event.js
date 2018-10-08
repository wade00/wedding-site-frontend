import React, { Component, Fragment } from 'react'
// import PropTypes from "prop-types"
// import "./styles.css"
import Hero from "../../images/tara_and_wade_banner.jpg"
import "./styles.css"

const propTypes = {}

class Event extends Component {
  render() {
    return (
      <Fragment>
        <img src={Hero} className="event-hero-image" />
        <div className="text-center">
          <h2>06.21.19</h2>
          <h3>Tara &amp; Wade are Getting Married</h3>
          <p>Here's everything you need to know</p>
        </div>
        <div>
          <h2>Venue</h2>
          <p>Bridgeport Arts Center - Skyline Loft</p>
          <a href="#">Directions</a>
        </div>
        <div className="text-right">
          <h2>Date and Time</h2>
          <p>Friday, June 21st, 2019</p>
          <p>Ceremony: 5:30pm</p>
          <p>Cocktail hour, dinner, and reception to follow.</p>
        </div>
      </Fragment>
    )
  }
}

Event.propTypes = propTypes

export default Event
