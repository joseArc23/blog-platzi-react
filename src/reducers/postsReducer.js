import { UPDATE, LOADING, ERROR } from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: true,
  error: null
}

export const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case UPDATE:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        posts: [],
      }

    default: return state
  }
}