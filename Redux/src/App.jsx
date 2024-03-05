import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { login } from './store/RootReducer'
import { useDispatch } from 'react-redux'

function App() {

  const user = useSelector((state) => state.root.user)
  const [username, setUsername] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  const dispatch = useDispatch()


  const submit = (e) => {
    e.preventDefault()
    dispatch(login({name: username, email: email}))
  }

  return (
    <>
      <div className="App">
        <h1> {user.name}</h1>
        <h1> {user.email} </h1>
      </div>
      <form onSubmit={submit}>
        <input
          type="text"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="email"
          defaultValue={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
