import React from 'react'
import { NavLink } from "react-router-dom";

const SignedOutNavbar = () => {
  return (
    <ul>
      <li><NavLink to='/signin'>SIGN IN</NavLink></li>
      <li><NavLink to='/signup'>SIGN UP</NavLink></li>
    </ul>
  )
}

export default SignedOutNavbar
