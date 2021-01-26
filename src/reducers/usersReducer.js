const INITIAL_STATE = {
  users: [],
  loading: true,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_usuarios':
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        users: action.payload.users,
      }
    default: return state
  }
}