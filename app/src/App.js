import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'

class App extends Component {

  render() {
    const helper = (selector, context) => {
      context = context || document
      var elements = context.querySelectorAll(selector)
      return Array.prototype.slice.call(elements)
    }

    window.addEventListener('scroll', () => {
    var scrolledHeight = window.pageYOffset
    helper('.parallax').forEach((el, index, array) => { 
      let limit = el.offsetTop + el.offsetHeight
    if ( scrolledHeight > el.offsetTop && scrolledHeight <= limit ) {
      el.style.backgroundPositionY =  ( scrolledHeight - el.offsetTop ) /1.5+ 'px'
      } else {
      el.style.backgroundPositionY = '0'
      }
      })
    })

    return (
      <div className="App">
        <Header />
        <Intro />
        <section className="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
        <section className="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
        <section className="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
      </div>
    );
  }
}

export default App;
