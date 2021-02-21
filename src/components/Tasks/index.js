import React from 'react'
import { connect } from 'react-redux'

// import { tasksTraerTodos } from '../../actions/tasksActions'
import * as tasksActions from '../../actions/tasksActions'

class index extends React.Component {
  componentDidMount() {
    this.props.tasksTraerTodos()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        User Tasks
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(index)