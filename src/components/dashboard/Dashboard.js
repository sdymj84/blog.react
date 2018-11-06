import React, { Component } from 'react'
import NotificationContainer from './NotificationContainer';
import ProjectContainer from '../projects/ProjectContainer'
import './Dashboard.css'

export class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard">
        <div className="row">
          <ProjectContainer />
          <NotificationContainer />
        </div>
      </div>
    )
  }
}

export default Dashboard
