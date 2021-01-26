import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'

const Users = (props) => {
  const {users, loading, error} = props.data
  // const [users, setUsers] = useState({ loading: true, data: [], error: null})

  // useEffect(() => {
  //   setUsers({ loading: true, error: null})
  //   const fetchData = async () => {
  //     try {
  //       const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
  //       setUsers({ loading: false, data: response.data })
  //     } catch(error) {
  //       setUsers({ loading: false, error: error})
  //     }
  //   }
  //   fetchData()
  // }, [])


  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  console.log(props)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
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

const mapStateToProps = state => {
  return {
    data: state.usersReducer
  }
}

export default connect(mapStateToProps, null)(Users);
