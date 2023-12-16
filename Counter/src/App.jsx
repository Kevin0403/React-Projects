import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    if(counter <20){
      setCounter(counter + 1)
    }
  }

  const removeCounter = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h2>Counter is {counter}</h2>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={removeCounter}>Remove</button>
    </>
  )
}

export default App
