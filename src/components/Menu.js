import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <nav id="menu">
    <Link to="/">
      Users
    </Link>
    <Link to="/tareas">
      Tasks
    </Link>
  </nav>
)

export default Menu