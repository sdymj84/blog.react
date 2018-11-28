import React from 'react'
import moment from 'moment'

const Notification = (props) => {
  const { notifications } = props
  return (
    <div className="col s12 m5 section right" id="notifications">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications && notifications.map(notification => {
              return <li key={notification.id}>
                <span className="pink-text">{notification.user}</span>
                <span> {notification.content}</span>
                <div className="grey-text note-date smaller-text">
                  {moment(notification.time.toDate()).fromNow()}
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notification
