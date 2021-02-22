import React from 'react'
import { connect } from 'react-redux'

// import { tasksTraerTodos } from '../../actions/tasksActions'
import * as tasksActions from '../../actions/tasksActions'
import Spinner from '../utils/Spinner'
import Fatal from '../utils/Fatal'

class index extends React.Component {
  componentDidMount() {
    // Esto es para que no se repitan las peticiones
    if (!Object.keys(this.props.tasks).length) {
      this.props.tasksTraerTodos()
    }
  }

  showContent = () => {
    const { tasks, loading, error } = this.props
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <Fatal message={error} />
    }
    
    // obtenemos los ususarios 10 en total
    return Object.keys(tasks).map((user_id) => (
      <div key={user_id}>
        <h2>
          User {user_id}
        </h2>
        <div className="contenedor_tareas">
          { this.putTasks(user_id) }
        </div>
      </div>
    ))
  }

  putTasks = (user_id) => {
    const { tasks } = this.props
    // traera las tareas de un solo usuario
    const per_user = {
      ...tasks[user_id]
    }

    // el input estara marcado dependiendo del tks_id 
    return Object.keys(per_user).map((tsk_id) => (
      <div key={tsk_id}>
        <input type="checkbox" defaultChecked={per_user[tsk_id].completed} />
        {per_user[tsk_id].title}
      </div>
    ))
  }

  
  render() {
    console.log(this.props)
    return (
      <div>
        { this.showContent() }
      </div>
    )
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default connect(mapStateToProps, tasksActions)(index)