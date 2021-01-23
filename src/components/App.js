import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState({ loading: true, data: [], error: null})

  useEffect(() => {
    setUsers({ loading: true, error: null})
    const fetchData = async () => {
      try {
        const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)
        setUsers({ loading: false, data: response.data })
      } catch(error) {
        setUsers({ loading: false, error: error})
      }
    }
    fetchData()
  }, [])


  if (users.loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
