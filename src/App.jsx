import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [size,setSize]=useState({width:504,height:502,})
  return (
    <div className="App container">
      <Header />
      <img className='sun' style={{'width':`${size.width}px`,'height':`${size.height}px`}} src="src/images/sun_cropped.gif" alt="sun_out" />
    </div>
  )
}

export default App
