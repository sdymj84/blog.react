import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  console.log(id);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0 lighten-4">
        <div className="card-content">
          <span className="card-title">
            Weekly Work Note (id={id})
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est esse temporibus dolorum maxime ad quia error vitae minus dignissimos illo, voluptate natus earum ab vero inventore tempore, laudantium quisquam!</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by Minjun</div>
          <div>11/06, 3:41pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
