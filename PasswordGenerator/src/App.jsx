import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

// Use Callback : useCallback(callback, dependencies) will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.

  const passwordGenerator =  useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghinklmnopqrstuvwxyz"
    if(numberAllowed) string = string + '1234567890'
    if(charAllowed) string = string + ';`~.><,/?|+-*_(){}'

    for (let i = 0; i < length; i++) {
      pass += string[Math.floor(Math.random() * string.length)]
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // useRef

  const passwordRef = useRef()

  useEffect(passwordGenerator, [length, charAllowed, numberAllowed, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className=' text-white text-center my-3'>Password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type = "text"
          value={password}
          className=' outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className=' cursor-pointer'
            onChange={(event) => {setLength(event.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type = 'checkbox'
              defaultChecked = {numberAllowed}
              id = "numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type = 'checkbox'
              defaultChecked = {charAllowed}
              id = "numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Charecters</label>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
