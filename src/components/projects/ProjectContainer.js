import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ProjectSummary from './ProjectSummary';

export class ProjectContainer extends Component {
  onProjectClick = () => {
    console.log("Project clicked")
  }

  render() {
    return (
      <div className="col s12 m6 project-container section" id="projects">
        <Link to='/'>
          <ProjectSummary onClick={this.onProjectClick} />
          <ProjectSummary onClick={this.onProjectClick} />
          <ProjectSummary onClick={this.onProjectClick} />
        </Link>
      </div>
    )
  }
}

export default ProjectContainer
