import React from 'react'
import './Projects.css'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card blue-grey darken-1 project-summary">
      <div className="card-content white-text">
        <span className="card-title">{project.title}</span>
        <p>posted by {project.firstName}</p>
        <p>date</p>
      </div>
    </div>
  )
}

export default ProjectSummary
