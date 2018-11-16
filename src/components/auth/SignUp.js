import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from '../../actions/authActions'

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container auth">
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s10 offset-s1">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="row">
              <div className="input-field col s6">
                <input onChange={this.handleChange} id="firstName" type="text" className="validate" />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input onChange={this.handleChange} id="lastName" type="text" className="validate" />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={this.handleChange} id="email" type="email" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={this.handleChange} id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="btn-large waves-effect waves-light col s4 offset-s4">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
