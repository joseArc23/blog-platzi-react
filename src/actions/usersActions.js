import axios from 'axios'

export const traerTodos = () => async (dispatch) => {
  // const data = {
  //   loading: true,
  //   error: null,
  //   data: [],
  // }
  const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: 'traer_usuarios',
    payload: {
      // ...data,
      loading: false,
      error: null,
      users: response.data,
    }
  })
}