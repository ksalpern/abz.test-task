import React from 'react'
import './Tooltip.scss'

const Tooltip = ({ children, title, position }) => {
  return (
    <div className={`tooltip`} data-position={position} data-tool-tip={title}>
      {children}
    </div>
  )
}

export default Tooltip
