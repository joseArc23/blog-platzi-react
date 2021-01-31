import axios from 'axios'
import { TRAER_TODOS } from '../types/usersTypes'

export const traerTodos = () => async (dispatch) => {
  try {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: TRAER_TODOS,
      payload: {
        loading: false,
        error: null,
        users: response.data,
      }
    })
  } catch (error) {
    console.error(error)
  }
}