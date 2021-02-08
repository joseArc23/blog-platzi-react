import axios from 'axios'
import { GET_POSTS, LOADING, ERROR } from '../types/postsTypes'
import { GET_ALL as USERS_GET_ALL } from '../types/usersTypes'

// export const postsTraerTodos = () => async (dispatch) => {
//   dispatch({
//     type: LOADING
//   })
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     dispatch({
//       type: GET_POSTS,
//       payload: response.data
//     })
//   } catch (error) {
//     dispatch({
//       type: ERROR,
//       payload: error
//     })
//   }
// }

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
    const updatedPosts = [
      ...posts,
      response.data,
    ]

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

    // copiamos el mismpo action para un solo usuario
    dispatch({
      type: GET_POSTS,
      payload: updatedPosts
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
  }
}