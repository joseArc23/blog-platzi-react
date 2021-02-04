import React from 'react'
import { connect } from 'react-redux'

import * as usersActions  from '../../actions/usersActions'


class Publications extends React.Component {

  componentDidMount() {
    if (!this.props.users.length) {
      console.log('bring then on')
      this.props.traerTodos()
    }
  }

  render() {
    // const {users, loading, error} = this.props
    // // console.log(this.props)
    
    // if (loading) {
    //   return (
    //     <div>loading</div>
    //   )
    // }
    
    // if (error && !users) {
    //   return (
    //     <div>error</div>
    //   )
    // }

    return (
      <>
        <h1>Publicaciones de </h1>

        {/* https://jsonplaceholder.typicode.com/users?id=1 */}

        <p>{this.props.match.params.id}</p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state.usersReducer
}

export default connect(mapStateToProps, usersActions)(Publications)