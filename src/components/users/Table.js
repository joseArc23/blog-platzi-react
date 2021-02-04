import React from 'react'

import { Link } from 'react-router-dom'

const Row = ({ name, email, website, id, username }) => {
  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
      <td>
        <Link to={`/publications/${id}`}>
          <div className="eye-solid3 icon"></div>
        </Link>
      </td>
    </>
  )
}

const Table = ({ users }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}>
              <Row {...user} />
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Table