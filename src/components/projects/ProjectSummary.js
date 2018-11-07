import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{project.title}</span>
        <p>posted by Minjun</p>
        <p>11/06, 2:12pm</p>
      </div>
    </div>
  )
}

export default ProjectSummary
