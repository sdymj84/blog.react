import React from 'react'
import Notification from './Notification'

const NotificationContainer = () => {
  return (
    <div className="col s12 m5 right">
      <ul className="collection">
        <li className="collection-item"><Notification /></li>
        <li className="collection-item"><Notification /></li>
        <li className="collection-item"><Notification /></li>
      </ul>
    </div>
  )
}

export default NotificationContainer
