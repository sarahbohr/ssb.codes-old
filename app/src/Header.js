import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    
    window.onscroll = () => { scrollFunction() }

    const scrollFunction = () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 300) {
        document.querySelector(".navbar").style.top = "0"
      } else {
        document.querySelector(".navbar").style.top = "-100px"
      }
    }

    return (
      <nav className="navbar sticky-top">
        <a className="navbar-brand" href="/"><div id="giraffe">&nbsp;</div> Sarah S. Battey</a>
        <ul className="nav justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tech">Technologies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#invol">Involvement</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header