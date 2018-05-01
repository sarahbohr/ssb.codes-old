import React, { Component } from 'react'
import './Intro.css'

class Intro extends Component {

  render() {
    return(
      <section className="parallax" id="intro">
        <div id="intro-text">
        <h1>Sarah S. Battey</h1>
        <h2>full stack software engineer</h2>
        <h3>Denver, Colorado</h3>
        </div>
      </section>
    )
  }
}

export default Intro