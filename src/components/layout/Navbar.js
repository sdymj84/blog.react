import React from 'react'
import SignedInNavbar from './SignedInNavbar';
import SignedOutNavbar from './SignedOutNavbar';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const Navbar = () => {
  return (
    // <BrowserRouter>
    <nav>
      <div className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">BLOG</Link>
          <SignedInNavbar />
          <SignedOutNavbar />
        </div>
      </div>

    </nav>
    // </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar)
