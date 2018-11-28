import React, { Component } from 'react'
import Notification from './Notification';
import ProjectContainer from '../projects/ProjectContainer'
import './Dashboard.css'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    const { auth, projects, notifications } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container dashboard">
        <div className="row">
          <ProjectContainer projects={projects} />
          <Notification notifications={notifications} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects',
      orderBy: ['createdAt', 'desc']
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc']
    }
  ])
)(Dashboard)