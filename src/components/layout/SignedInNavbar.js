import React from 'react'
import { NavLink } from "react-router-dom";

const SignedInNavbar = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/create'>Create new post</NavLink></li>
      <li><NavLink to='/'>MY</NavLink></li>
    </ul>
  )
}

export default SignedInNavbar
