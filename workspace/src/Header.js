import React, { Component } from 'react'
import { Link } from "react-router-dom"
class Header extends Component {
  render() {
    return (
      <>
        <body>
          <header>

            <div className="logo">
              <h1 class="logo-text">ChuckNorris Jokes</h1>
            </div>



            <ul>

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