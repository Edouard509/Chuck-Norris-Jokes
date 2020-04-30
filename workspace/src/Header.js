import React, { Component } from 'react'
import { Link } from "react-router-dom"
class Header extends Component {

  state = { toggle: false }

  render() {
    let toggle = this.state.toggle
    return (
      <>
        <body>
          <header>

            <div className="logo">
              <h1 class="logo-text">ChuckNorris Jokes</h1>
            </div>

            <i className="fa fa-bars menu-toggle" onClick={() => this.setState({ toggle: !toggle })}></i>

            <ul className={this.state.toggle ? "overflow" : null}>

              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/biography"> Biography </Link></li>

            </ul>
          </header>
        </body>
      </>
    )
  }
}

export default Header