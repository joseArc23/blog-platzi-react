import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Error.css'

const Error = ({ message }) => (
  <div>
    <div className="Error-center">
        <div className="BG-img"></div>
        <h2>{message}</h2>
        <Link to="/" className="btn btn-primary">Take me out of here</Link>
        <a href="https://storyset.com/web">Illustration by Freepik Storyset</a>
      </div>
  </div>
)

export default Error