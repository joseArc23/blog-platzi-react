import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: true,
  error: null,
  user_id: '',
  title: ''
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
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        tasks: null,
      }

    case 'change_user_id':
      return {
        ...state,
        user_id: action.payload
      }
    
    case 'change_title':
      return {
        ...state,
        title: action.payload
      }

    default: return state
  }
}