import React, { Component } from 'react'
import NotificationContainer from './NotificationContainer';
import ProjectContainer from '../projects/ProjectContainer'
import './Dashboard.css'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container dashboard">
        <div className="row">
          <ProjectContainer projects={this.props.projects} />
          <NotificationContainer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
