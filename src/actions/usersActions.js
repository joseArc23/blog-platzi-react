import axios from 'axios'
import { GET_ALL, LOADING, ERROR } from '../types/usersTypes'

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true
  })
  try {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: GET_ALL,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error
    })
    console.error(error)
  }
}