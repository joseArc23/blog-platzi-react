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