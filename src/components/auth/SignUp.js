import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }

  render() {
    return (
      <div className="container auth">
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

export default SignUp
