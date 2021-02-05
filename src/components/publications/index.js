import React from 'react'
import { connect } from 'react-redux'

import * as usersActions  from '../../actions/usersActions'
import * as postsActions  from '../../actions/postsActions'


class Publications extends React.Component {

  componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      console.log('bring then on')
      this.props.usersTraerTodos()
    }
  }

  render() {
    const {users, loading, error} = this.props.usersReducer
    // // console.log(this.props)
    console.log(this.props)
    
    if (loading) {
      return (
        <div>loading</div>
      )
    }
    
    if (error && !users) {
      return (
        <div>error</div>
      )
    }

    return (
      <>
        <h1>Publicaciones de </h1>

        {/* https://jsonplaceholder.typicode.com/users?id=1 */}

        <p>{this.props.match.params.id}</p>
      </>
    )
  }
}

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer
  }
}

const mapDispatchToProps = {
  ...usersActions, // traerTodos()
  ...postsActions, // traerReducer()
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications)