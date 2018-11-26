import React from 'react'

const Notification = (props) => {
  return (
    <div className="col s12 m5 section right" id="notifications">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
            <li>Notification</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notification
