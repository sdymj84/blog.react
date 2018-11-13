import React, { Component } from 'react'
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  render() {
    const { authError } = this.props
    return (
      <div className="container auth">
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s10 offset-s1">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"
                  onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"
                  onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <button className="btn-large waves-effect waves-light col s4 offset-s4">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
