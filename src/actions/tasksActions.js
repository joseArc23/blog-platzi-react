import axios from 'axios'
import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

export const tasksTraerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    // traemos las tareas de la api
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    
    const tasks = {}
    response.data.map(tsk => (
      tasks[tsk.userId] = {
        ...tasks[tsk.userId],
        [tsk.id]: {
          ...tsk
        }
      }
    ))

    dispatch({
      type: GET_TASKS,
      payload: tasks
    })
  } catch (error) {
    console.log('Error:', error.message)
    dispatch({
      type: ERROR,
      payload: 'Tasks not available now, try later...'
    })
  }
}

export const changeUserId = (user_id) => (dispatch) => {
  dispatch({
    type: 'change_user_id',
    payload: user_id
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: 'change_title',
    payload: title
  })
}