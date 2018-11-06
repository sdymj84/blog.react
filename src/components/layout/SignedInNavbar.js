import React from 'react'
import { Link, NavLink } from "react-router-dom";

const SignedInNavbar = () => {
  return (
    <div>
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/'>Create new post</NavLink></li>
      <li><NavLink to='/'>MY</NavLink></li>
    </div>
  )
}

export default SignedInNavbar
