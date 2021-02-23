import axios from 'axios'
import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'
import { CHANGE_USER_ID, CHANGE_TITLE, SAVED } from '../types/tasksTypes'

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
    type: CHANGE_USER_ID,
    payload: user_id
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

export const add = (new_task) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', new_task)
    console.log(response.data)
    // creamos el dispatch pero sin payload ya que se guardo en la base de datos
    dispatch({
      type: SAVED
    })

  } catch (error) {
    console.error(error.message)
    dispatch({
      type: ERROR,
      payload: 'Try later'
    })
  }
}

export const edit = (task_edited) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task_edited.id}`, task_edited)
    console.log(response.data)
    // creamos el dispatch pero sin payload ya que se guardo en la base de datos
    dispatch({
      type: SAVED
    })

  } catch (error) {
    console.error(error.message)
    dispatch({
      type: ERROR,
      payload: 'Try later'
    })
  }
}