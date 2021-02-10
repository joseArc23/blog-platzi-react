import React from 'react'

import * as usersActions  from '../../actions/usersActions'
import { connect } from 'react-redux'

import Table from './Table'
import Spinner from '../utils/Spinner'
import Error from '../utils/Error'

class Users extends React.Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.usersTraerTodos()
    }
  }
  
  render() {
    // console.log(this.props)
    const {users, loading, error} = this.props
    
    if (error && !users) {
      return <Error message={error.message} />
    }
    
    if (loading) {
      return <Spinner />
    }
    
    
    return (
      <Table users={users} />
    )
  }
}

const mapStateToProps = state => {
  return state.usersReducer

  // return {
  //   users: state.usersReducer.users,
  //   loading: state.usersReducer.loading,
  //   error: state.usersReducer.error,
  // }
}

export default connect(mapStateToProps, usersActions)(Users);