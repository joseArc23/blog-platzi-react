import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <nav id="menu">
    <Link to="/">
      Users
    </Link>
    <Link to="/tareas">
      Takss
    </Link>
  </nav>
)

export default Menu