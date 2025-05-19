import React from 'react'
import './style.css'

type NoDataProps = {
  message: string
  className?: string
}

const NoData: React.FC<NoDataProps> = ({ message, className = '' }) => {
  return (
    <div className={`no-data-container ${className}`}>
      <div className="no-data-icon">😞</div>
      <div className="no-data-message">
        <h3>{message}</h3>
      </div>
      <div className="no-data-submessage">
        <p>Try again later or check back soon!</p>
      </div>
    </div>
  )
}

export default NoData
