import React from 'react'

import { Link } from 'react-router-dom'

const Row = ({ name, email, website, id, index }) => {
  // const { name, email, website, id } = props
  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
      <td>
        <Link to={`/publications/${index}`}>
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
          {users.map((user, i) => 
            <tr key={user.id}>
              <Row {...user} index={i} />
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Table