import axios from 'axios'
import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

export const tasksTraerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    // traemos las tareas de la api
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    dispatch({
      type: GET_TASKS,
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