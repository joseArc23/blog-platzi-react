import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Menu from './Menu'
import Users from './users'

const Tasks = () => (<div>Taresa</div>)

const App = () => (
  <Router>
      <Menu />
      <div className="margin">
        <Route exact path="/" component={Users} />
        <Route exact path="/tareas" component={Tasks} />
      </div>
  </Router>
)

export default App