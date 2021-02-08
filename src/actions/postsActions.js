import axios from 'axios'
import { GET_POSTS, LOADING, ERROR } from '../types/postsTypes'

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
  // usamos el key para encontrar el usuario exacto dependiendo 
  // de su posición en el index (key)
  const { users } = getState().usersReducer
  const { posts } = getState().postsReducer

  const userId = users[key].id
  console.log(posts)
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const updatedPosts = [
      ...posts,
      response.data,
    ]
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