import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'
import { CHANGE_USER_ID, CHANGE_TITLE, SAVED, UPDATE } from '../types/tasksTypes'
const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: null,
  user_id: '',
  title: '',
  regresar: false
}

export const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null,
        regresar: false
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        tasks: null,
      }

    case CHANGE_USER_ID:
      return {
        ...state,
        user_id: action.payload
      }
    
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      }

    case SAVED:
      return {
        ...state,
        tasks: {},
        loading: false,
        error: null,
        regresar: true,
        user_id: '',
        title: ''
      }

    case UPDATE:
      return {
        ...state,
        tasks: action.payload
      }

    default: return state
  }
}