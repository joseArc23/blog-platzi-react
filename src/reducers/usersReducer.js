const INITIAL_STATE = {
  users: [],
  loading: true,
  error: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_usuarios':
      return {...state, users: action.payload}
    default: return state
  }
}