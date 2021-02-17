import { UPDATE, LOADING, ERROR, COM_ERROR, COM_LOADING, COM_UPDATE } from '../types/postsTypes'
const INITIAL_STATE = {
  posts: [],
  loading: true,
  error: null,
  com_loading: true,
  com_error: null
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

    case COM_LOADING:
      return {
        ...state,
        com_loading: true,
      }

    case COM_UPDATE:
      return {
        ...state,
        posts: action.payload,
        com_loading: false,
        com_error: null,
      }

    case COM_ERROR:
      return {
        ...state,
        com_error: action.payload,
        com_loading: false,
      }
    default: return state
  }
}