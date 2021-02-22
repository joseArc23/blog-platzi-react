import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Menu from './Menu'
import Users from './users'
import Publications from './publications'
import Tasks from './Tasks'
import SaveTask from './Tasks/Save'

const App = () => (
  <Router>
      <Menu />
      <div className="margin">
        <Route exact path='/' component={Users} />
        <Route exact path='/tareas' component={Tasks} />
        <Route exact path='/publications/:key' component={Publications} />
        <Route exact path='/tasks/save' component={SaveTask}  />
      </div>
  </Router>
)

export default App