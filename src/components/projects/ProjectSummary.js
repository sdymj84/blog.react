import React from 'react'

const ProjectSummary = (props) => {
  return (
    <div onClick={props.onClick} className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Weekly Work Note</span>
        <p>posted by Minjun</p>
        <p>11/06, 2:12pmy</p>
      </div>
    </div>
  )
}

export default ProjectSummary
