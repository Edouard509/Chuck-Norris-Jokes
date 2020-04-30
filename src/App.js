import React, { useState, useEffect } from 'react'
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

function App() {

  const [joke, setJoke] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {

    getResults()
  }, [count])

  const getResults = async () => {
    const response = await axios
      .get(`https://corsanywhere.herokuapp.com/api.icndb.com/jokes/random`, { headers: { 'Accept': 'application/json' } })
    setJoke(response.data.value.joke)
    console.log(response)
  }


  return (
    <div className="main-box">
      <div>
        <div>
          <Header />
        </div>

        <main>
          <Route exact path="/">
            <h1>Jokes</h1>
            <Main getResults={getResults} joke={joke} />
            <button onClick={() => setCount(count + 1)}>New Joke</button>
          </Route>

          <Route exact path="/biography">
            <h1>Biography</h1>
            <div className="bio">
              <h3> Chuck Norris is familiar to fans worldwide as the star of action films such as The Hitman (1991), The Delta Force (1986) and Delta Force 2: The Colombian Connection (1990). He also starred in Missing in Action (1984) and its sequels, Firewalker (1986) and Sidekicks (1992). He was an executive producer of Walker, Texas Ranger (1993) as well as the star.</h3>
            </div>
          </Route>
        </main>

        <div>

          <Footer />

        </div>

      </div>
    </div>
  )
}

export default App