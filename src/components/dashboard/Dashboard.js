import React, { Component } from 'react'
import NotificationContainer from './NotificationContainer';
import ProjectContainer from '../projects/ProjectContainer'
import './Dashboard.css'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Dashboard extends Component {
  render() {
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
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
