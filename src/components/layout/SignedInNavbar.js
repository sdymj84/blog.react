import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

const SignedInNavbar = (props) => {
  return (
    <ul>
      <li><NavLink to='/'>Dashboard</NavLink></li>
      <li><NavLink to='/create'>Create new post</NavLink></li>
      <li><NavLink to='/' className="btn-floating red lighten-1 center">{props.initials}</NavLink></li>
      <li><NavLink to='/' onClick={() => props.signOut()}>SignOut</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInNavbar)
