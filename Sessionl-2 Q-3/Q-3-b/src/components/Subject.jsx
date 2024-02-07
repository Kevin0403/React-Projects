import React from 'react'
import './Subject.css'

function Subject({
    name,
    semester
}) {
  return (
    <div className='card'>
        <h1 style={{'color' : 'red'}}>{semester}</h1>
        <h3  style={{'color' : 'blue'}}>{name}</h3>
    </div>
  )
}

export default Subject