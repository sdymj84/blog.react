import React from 'react'
import './Projects.css'
import moment from 'moment'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card blue-grey darken-1 project-summary">
      <div className="card-content white-text">
        <span className="card-title">{project.title}</span>
        <p className="smaller-text">posted by {project.firstName + ' ' + project.lastName}</p>
        <p className="smaller-text">created at {moment(project.createdAt.toDate().toString()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
