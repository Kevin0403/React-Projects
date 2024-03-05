import React, {useState} from 'react'

function Form() {

    const [data, setData] = useState({
        semester : null,
        subjectName : '',
        subjectTeacher : ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={submit}>
            <label htmlFor="semester">Semester:</label>
            <input type="number" id="semester" name="semester" onChange={handleChange} />
            <br/>
            <label htmlFor="subjectName">Subject Name:</label>
            <input type="text" id="subjectName" name="subjectName" onChange={handleChange} />
            <br/>
            <label htmlFor="subjectTeacher">Subject Teacher:</label>
            <input type="text" id="subjectTeacher" name="subjectTeacher" onChange={handleChange} />
            <br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form