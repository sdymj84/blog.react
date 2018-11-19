import React from 'react'
import SignedInNavbar from './SignedInNavbar';
import SignedOutNavbar from './SignedOutNavbar';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const Navbar = (props) => {
  const links = !props.auth.uid ?
    <SignedOutNavbar /> : <SignedInNavbar initials={props.initials} />
  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to='/' className="brand-logo">BLOG</Link>
            <a href="#" data-target="mobile-links" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <div className="right hide-on-med-and-down">
              {links}
            </div>
          </div>
        </div>
      </nav>

      <div className="sidenav" id="mobile-links">
        {links}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    initials: state.firebase.profile.initials
  }
}

export default connect(mapStateToProps)(Navbar)
