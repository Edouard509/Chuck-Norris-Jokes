import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./App.css"

export default function Main(props) {
  console.log(props)
  return (
    <>
      <div className="main-container">
        <h3>{props.joke}</h3>
      </div>
    </>
  )

}
