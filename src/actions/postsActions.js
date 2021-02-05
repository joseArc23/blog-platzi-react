import axios from 'axios'
import { GET_ALL, LOADING, ERROR } from '../types/postsTypes'

export const postsTraerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: GET_ALL,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}

export const getPostsUser = (key) => async (dispatch, getState) => {
  // usamos el key para encontrar el usuario exacto dependiendo 
  // de su posición en el index (key)
  const { users } = getState().usersReducer
  const userId = users[key].id
  console.log( users)
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  // copiamos el mismpo action para un solo usuario
  dispatch({
    type: GET_ALL,
    payload: response.data
  })
}