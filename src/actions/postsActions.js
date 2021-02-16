import axios from 'axios'
import { UPDATE, LOADING, ERROR } from '../types/postsTypes'
import { GET_ALL as USERS_GET_ALL } from '../types/usersTypes'

export const getPostsUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  })
  // usamos el key para encontrar el usuario exacto dependiendo 
  // de su posición en el index (key)
  const { users } = getState().usersReducer
  const { posts } = getState().postsReducer

  const userId = users[key].id

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    
    const newOnes = response.data.map((post) => ({
      ...post,
      comments: [],
      open: false
    }))
    
    const updatedPosts = [
      ...posts,
      newOnes
    ]

    // copiamos el mismpo action para un solo usuario
    dispatch({
      type: UPDATE,
      payload: updatedPosts
    })
    
    // cuando tengamos un post será index 0
    const posts_key = updatedPosts.length - 1
    // creamos una copia que solo llega al primer nivel
    const updatedUsers = [...users]
    // añadimos una nueva propiedad por número de index
    updatedUsers[key] = {
      ...users[key],
      posts_key,
    }
    
    dispatch({
      type: USERS_GET_ALL,
      payload: updatedUsers
    })
    
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'Publicaciones no disponibles'
    })
  }
}

export const openClose = (posts_key, com_key) => (dispatch, getState) => {
  // console.log(posts_key, com_key)
  const { posts } = getState().postsReducer
  // selecionamos al key
  const selected = posts[posts_key][com_key]
  // la pub actualizada
  const updated = {
    ...selected,
    open: !selected.open
  }
  // posts es un arreglo de arreglos inmuabilidad le decimos nivel por nivel que
  // posts estamos actualizando
  const updatedPosts = [...posts]
  // entramos al nivel del posts
  updatedPosts[posts_key] = [...posts[posts_key]]
  updatedPosts[posts_key][com_key] = updated
  // post por usuario
  dispatch({
    type: UPDATE,
    payload: updatedPosts
  })
}