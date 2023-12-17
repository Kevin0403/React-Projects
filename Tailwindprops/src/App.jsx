import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Error from './Componants/Error'

function App() {

  const errorCode = Math.floor(Math.random() *50) + 400

  return (
    <>
    <Error errorCode={errorCode}/>
        </>
  )
}

export default App
