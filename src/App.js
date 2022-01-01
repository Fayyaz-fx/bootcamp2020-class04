import './App.css'
import { useState } from 'react'

function App() {
  const [isLit, setIsLit] = useState(false)
  const [temp, setTemp] = useState(72)

  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      <h1>The room is {isLit ? 'Lit' : 'dark'}</h1>
      <br />

      <button className='btn' onClick={() => setIsLit(true)}>
        Switch On
      </button>

      <button className='btn' onClick={() => setIsLit(false)}>
        Switch Off
      </button>
      <h1>and The temperature is {temp}</h1>
      <br />
      <button className='btn' onClick={() => setTemp(temp + 1)}>
        Increase
      </button>

      <button className='btn' onClick={() => setTemp(temp - 1)}>
        Decrease
      </button>
    </div>
  )
}

export default App
