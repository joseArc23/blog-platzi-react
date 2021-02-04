import React from 'react'

const Row = ({ name, email, website }) => {
  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
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