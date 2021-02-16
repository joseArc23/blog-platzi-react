import React from 'react'
  import { connect } from 'react-redux'

import * as usersActions  from '../../actions/usersActions'
import * as postsActions  from '../../actions/postsActions'

import Comments from './Comments'
import Spinner from '../utils/Spinner'
import Error from '../utils/Error'

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

  putPosts = () => {
    const {
			usersReducer,
			usersReducer: { users },
			postsReducer,
			postsReducer: { posts },
			match: { params: { key } }
		} = this.props;

    // validamos 
    if (!users.length) return;
    // en caso de error
		if (usersReducer.error) return;
		if (postsReducer.loading) {
			return <Spinner />;
		}
		if (postsReducer.error) {
			return <Error message={postsReducer.error} />
		}
    // en caso de que no haya posts, estara solicitandolos
		if (!posts.length) return;
    // si no tenemos post_key del users no hacer nada
		if (!('posts_key' in users[key])) return;

		const { posts_key } = users[key];
		return this.showInfo(posts[posts_key], posts_key)
  }

  showInfo = ( posts, posts_key) => (
    posts.map((posts, com_key) => (
			<div
				key={posts.id}
				className='pub_title'
				onClick={ () => this.props.showComments(posts_key, com_key, comments) }
			>
				<h2>
					{ posts.title }
				</h2>
				<h3>
					{ posts.body }
				</h3>
        {
          posts.open ? <Comments /> : ''
        }
			</div>
		))
  )

  showComments = (posts_key, com_key, comments) => {
    this.props.openClose(posts_key, com_key)
    this.props.bringComments(posts_key, com_key)
    // en code que no tenga comments voy a buscar
  }


  render() {
    const {
      usersReducer,
      match: { params: { key } },
    } = this.props

    console.log(this.props)    
    // en caso de que users no exista
    if (usersReducer.error && !usersReducer.users) {
      return <Error message={usersReducer.error.message}/>
    }

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Spinner />
    }
    
    
    const name = usersReducer.users[key].name
    return (
      <>
        <h1>Publicaciones de {name} </h1>
        {this.putPosts()}
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
  ...usersActions, // usersTraerTodos()
  ...postsActions, // openClose() getPostsUser()
}
export default connect(mapStateToProps, mapDispatchToProps)(Publications)
