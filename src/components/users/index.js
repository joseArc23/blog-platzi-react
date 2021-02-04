import React from 'react'

import * as usersActions  from '../../actions/usersActions'
import { connect } from 'react-redux'

import Spinner from '../utils/Spinner'
import Error from '../utils/Error'

class Users extends React.Component {
  componentDidMount() {
    this.props.traerTodos()
  }
  
  render() {
    const {users, loading, error} = this.props
    // console.log(this.props)
    
    if (loading) {
      return <Spinner />
    }
    
    if (error && !users) {
      return <Error message={error.message} />
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
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    loading: state.usersReducer.loading,
    error: state.usersReducer.error,
    // data: state.usersReducer
  }
}

export default connect(mapStateToProps, usersActions)(Users);