import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    
    window.onscroll = () => { scrollFunction() }

    const scrollFunction = () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.querySelector(".navbar").style.top = "0"
      } else {
        document.querySelector(".navbar").style.top = "-100px"
      }
    }

    // let navItems = document.querySelector('.nav')
    // let items = navItems.querySelector('.nav > .nav-item')
    // items.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     var current = document.querySelector('active')
    //     current[0].className = current[0].className.replace(' active', '')
    //     this.className += ' active'
    //   })
    // })

    return (
      <nav className="navbar sticky-top">
        <a className="navbar-brand" href="/"><div id="giraffe">&nbsp;</div> Sarah S. Battey</a>
        <ul className="nav justify-content-end">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Technologies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Involvement</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header