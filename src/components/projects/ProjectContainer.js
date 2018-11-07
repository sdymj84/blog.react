import React from 'react'
import { Link } from "react-router-dom";
import ProjectSummary from './ProjectSummary';

const ProjectContainer = ({ projects }) => {
  return (
    <div className="col s12 m6 project-container section" id="projects">
      <Link to='/'>
        {projects && projects.map(project => {
          return <ProjectSummary key={project.id} project={project} />
        })}
      </Link>
    </div>
  )
}

export default ProjectContainer
