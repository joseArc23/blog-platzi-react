import { GET_ALL, LOADING, ERROR } from '../types/usersTypes'

const INITIAL_STATE = {
  users: [],
  loading: true,
  error: null
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        users: null,
      }
    default: return state
  }
}