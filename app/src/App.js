import React, { Component } from 'react'
import './App.css'

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
        <header>
        </header>
        <section class="parallax">
          <h1>LET'S DO IT</h1>
        </section>
        <section class="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
        <section class="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
        <section class="parallax">
          <h1>LET'S GET IT DONE!</h1>
        </section>
      </div>
    );
  }
}

export default App;
