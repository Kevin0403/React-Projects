import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subjects from './components/Subjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Subjects />
    </>
  )
}

export default App
