import React from 'react'
import SignedInNavbar from './SignedInNavbar';
import SignedOutNavbar from './SignedOutNavbar';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="container">
            <Link to='/' className="brand-logo">MarioPlan</Link>
            <a href="#" data-target="mobile-links" className="sidenav-trigger">
              <i className="large material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <Route path='/user' component={SignedInNavbar} />
              <Route exact path='/' component={SignedOutNavbar} />
            </ul>
            <ul className="sidenav" id="mobile-links">
              <Route path='/user' component={SignedInNavbar} />
              <Route exact path='/' component={SignedOutNavbar} />
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar
