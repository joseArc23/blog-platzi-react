import { GET_TASKS, LOADING, ERROR } from '../types/tasksTypes'

const INITIAL_STATE = {
  tasks: {},
  loading: true,
  error: null
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
    default: return state
  }
}