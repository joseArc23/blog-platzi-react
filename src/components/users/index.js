import React, { useState, useEffect } from 'react'

import * as usersActions  from '../../actions/usersActions'
import { connect } from 'react-redux'

const Users = (props) => {
  const {users, loading, error} = props.data
  // const [users, setUsers] = useState({ loading: true, data: [], error: null})

  useEffect(() => {
    props.traerTodos()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

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

export default connect(mapStateToProps, usersActions)(Users);