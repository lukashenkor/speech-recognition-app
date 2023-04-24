import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page Is Not Found</h1>
      <NavLink to="/" className="go-home-link">Go to home page</NavLink>
    </>
  )
}

export default NotFound