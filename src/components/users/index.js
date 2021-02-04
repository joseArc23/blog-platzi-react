import React from 'react'

import * as usersActions  from '../../actions/usersActions'
import { connect } from 'react-redux'

import Table from './Table'
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
      <Table users={users} />
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
    loading: state.usersReducer.loading,
    error: state.usersReducer.error,
  }
}

export default connect(mapStateToProps, usersActions)(Users);