import React from 'react'

const CommonHead = ({description,title}) => {
  return (
    <div className="services">
    <div className="services_tag">
      <div className="services_title">
        <h2>{title}</h2>
      </div>
      <div className="services_desc">
        <p>
          {description}
        </p>
      </div>
    </div>
    </div>
  )
}

export default CommonHead