import React, {useState } from 'react'
import Subject from './Subject'
import './Subject.css'

function Subjects() {
    const [Subjects, setSubjects] = useState([
        {
            name : "FSD",
            semester : 6
        },
        {
            name : "AI",
            semester : 8
        },
        {
            name : "Data Science",
            semester : 7
        },
        {
            name : "Machine Learning",
            semester : 7
        },
        {
            name : "Block Chain",
            semester : 8
        }, 
        {
            name : "Cyber Security",
            semester : 7
        },
        {
            name : "C++",
            semester : 1
        },
        {
            name : "Cloud Computing",
            semester : 6
        },
        {
            name : "Big Data",
            semester : 8
        },
        {
            name : "Web Development",
            semester : 5
        }
    ])

  return (
    <div>
        <h1>Subjects</h1>
        <div className='carddiv'>
            {Subjects.map((subject, index) => (
                <Subject
                    key={index}
                    name={subject.name}
                    semester={subject.semester}
                />
            ))}
        </div>
    </div>
  )
}

export default Subjects