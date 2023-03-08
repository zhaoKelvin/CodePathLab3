import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/baristaForm';
import Cocao from "./assets/cocao.png"

function App() {

  return (
    <div className="main-app">
      <div className="title-container">
        <h1 className="title"><img src={Cocao} alt="cocao image" className="cocao" />On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
