import React, {useState} from 'react'

function DisplayTodos() {

    const [todos, setTodos] = useState([
        {
            name : 'Learn React',
            done : false
        },
        {
            name : 'Learn JSX',
            done : true
        },
        {
            name : 'Learn JavaScript',
            done : true
        },
        {
            name : 'Learn CSS',
            done : false
        },
        {
            name : 'Learn HTML',
            done : false
        }
    ])

    const revert = (event) => {
        
        setTodos(
            (todos) => todos.map(
                (todo) => todo.name === event.target.name ? {...todo, done : !todo.done} : todo
            )
        )
    }

  return (
    <div>
        <div>
            <h1>Completed</h1>
            <ul>
                {
                    todos.filter((todo) => todo.done).map((todo) => <li key={todo.name}><input type="text" readOnly={true} name={todo.name} value={todo.name} onClick={revert}/></li>)
                }
            </ul>
        </div>
        <div>
            <h1>Not Completed</h1>
            <ul>
                {
                    todos.filter((todo) => !todo.done).map((todo) => <li key={todo.name}><input type="text" readOnly={true} name={todo.name} value={todo.name} onClick={revert}/></li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default DisplayTodos