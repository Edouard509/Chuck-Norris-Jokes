import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'



export default function App() {

  let [joke, updateJoke] = useState('')
  let [value, updateValue] = useState(0)

  useEffect(() => {

    const apiCall = async () => {
      await axios('http://api.icndb.com/jokes/random',
        { headers: { 'Accept': 'application/json' } })
        .then(response => updateJoke(response.data.data))
    }

    apiCall()
  }, [value])

  return (
    <>
      <header>
        <h1>Chuck Norris Jokes</h1>
      </header>

      <main>
        <div className='norris-joke'>
          <h1>{joke}</h1>
        </div>
        <button onClick={() => updateValue(value + 1)}>New Joke</button>
      </main>
    </>
  )
}