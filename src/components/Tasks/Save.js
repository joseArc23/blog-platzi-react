import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as tasksActions from '../../actions/tasksActions'
import Spinner from '../utils/Spinner'
import Fatal from '../utils/Fatal'

class Save extends React.Component {
  componentDidMount() {
    const {
      match: { params: { user_id, tsk_id }},
      tasks,
      changeUserId,
      changeTitle,
    } = this.props
    
    console.log(user_id, tsk_id)
    if (user_id && tsk_id) {
      const task = tasks[user_id][tsk_id]
      changeUserId(task.userId)
      changeTitle(task.title)
    }
  }

  changeUserId = (event) => {
    this.props.changeUserId(event.target.value)
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value)
  }

  save = () => {
    const {
      match: { params: { user_id, tsk_id }},
      tasks,
      // user_id, // ya no es necesario
      title,
      add,
      edit
    } = this.props

    const new_task = {
      userId: user_id,
      title: title,
      completed: false
    }

    if (user_id && tsk_id) {
      const task = tasks[user_id][tsk_id]
      const task_edited = {
        ...new_task,
        completed: task.completed,
        id: task.id
      }
      edit(task_edited)
    } else {
      add(new_task)
    }
  }

  disable = () => {
    const { user_id, title, loading } = this.props
    if (loading) return true
    if (!user_id || !title) return true
    return false
  }

  showActionResult = () => {
    const { loading, error } = this.props
    if (error) {
      return <Fatal message={error} />
    }
    if (loading) {
      return <Spinner />
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.regresar ? <Redirect to='/tasks' /> : '' }
        <h1>Save Task</h1>
        User id:
        <input
          type="number"
          value={this.props.user_id}
          onChange={this.changeUserId}
        />
        <br/><br/>
        Title:
        <input
          type="text"
          value={this.props.title}
          onChange={this.changeTitle}
        />
        <br/><br/>
        <button
          onClick={this.save}
          disabled={this.disable()}
          // disabled={!this.props.user_id && !this.props.title} // funciona, pero apensa uno cambie ya se habilita
        >
          {/* Save */}
          {this.props.match.params.user_id ? 'Edit' : 'Save'}
        </button>
        
        {this.showActionResult()}
        
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Save)