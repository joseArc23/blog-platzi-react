import React from 'react'
import { connect } from 'react-redux'

import * as usersActions  from '../../actions/usersActions'
import * as postsActions  from '../../actions/postsActions'

import Spinner from '../utils/Spinner'
import Error from '../utils/Error'
// import putPosts from '../publications/putPosts'

class Publications extends React.Component {

  // para ordenar el orden de las peticiones
  async componentDidMount() {
    // no desestructuramos usersRedurers es un estado ya que son datos que pueden cambiar 
    const { usersTraerTodos, getPostsUser, match: { params: { key } } } = this.props

    if (!this.props.usersReducer.users.length) {
      await usersTraerTodos()
    }

    // en caso de un error aqui debemos evitar que se ejecuta la siguiente condicional
    console.log(this.props.usersReducer)
    if (this.props.usersReducer.error) {
      return
    }

    // buscamos si el user ya tiene el posts_key
    if (!('posts_key' in this.props.usersReducer.users[key])) {
      await getPostsUser(key)
    }
  }

  render() {
    const {users, loading, error} = this.props.usersReducer
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