import React, { useState } from 'react'


const Tenary = () => {
  const [userName, setUserName] = useState("")
  const [name, setName] = useState("") 

  let allStudents = [
    {firstName: "oluwaseun", lastName: "daniel"},
    {firstName: "idowu", lastName: "peter"}
  ]

  const changeName = () =>{
    setName(userName)
    target.value = ""
  }
  const user = (e) =>{
    setUserName(e.target.value)
  }
  return (

    
    <div>
      <h1>
        {name}
      </h1>
      <input type="text" placeholder='enter a text' onChange={user} id='home'/>
      <button onClick={changeName}>change name</button>
      
        <table border={1}>
            <th>
              S/N
            </th>
            <th>
              first name
            </th>
            <th>
              last name
            </th>
          <tbody>
      {allStudents.map((student, index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}

export default Tenary