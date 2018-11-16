import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectActions'
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container auth">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s10 offset-s1">
            <h5 className="grey-text text-darken-3">Post a blog</h5>
            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" className="validate"
                  onChange={this.handleChange} />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="content" className="materialize-textarea"
                  onChange={this.handleChange}></textarea>
                <label htmlFor="content">Content</label>
              </div>
            </div>
            <div className="row">
              <button className="btn-large waves-effect waves-light col s4 offset-s4">Post</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
