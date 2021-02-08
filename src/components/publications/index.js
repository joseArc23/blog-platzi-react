import React from 'react'
import { connect } from 'react-redux'

import * as usersActions  from '../../actions/usersActions'
import * as postsActions  from '../../actions/postsActions'

import Spinner from '../utils/Spinner'
import Error from '../utils/Error'


class Publications extends React.Component {

  // para ordenar el orden de las peticiones
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      console.log('bring then on')
      await this.props.usersTraerTodos()
    }
    await this.props.getPostsUser(this.props.match.params.key)
  }

  render() {
    const {users, loading, error} = this.props.postsReducer
    console.log(this.props)    
    if (loading) {
      return <Spinner />
    }
    
    if (error && !users) {
      return <Error message={error.message}/>
    }

    return (
      <>
        <h1>Publicaciones de </h1>

        {/* https://jsonplaceholder.typicode.com/users?id=1 */}

        <p>{this.props.match.params.key}</p>
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