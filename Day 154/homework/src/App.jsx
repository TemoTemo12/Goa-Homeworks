import React from 'react'
import Samsung from './components/SamsungApp'
import Apple from "./components/AppleApp"
import Home from "./components/HomePage"
import Spotify from "./components/Spotify"



export default function App() {
  return (
    <div>
      <Apple />
      <Samsung />
      <Home />
      <Spotify />
    </div>
  )
}
