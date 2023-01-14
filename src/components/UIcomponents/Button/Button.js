import React from 'react'
import './Button.scss'

const Button = ({ buttonLink, buttonClass, buttonText,buttonType }) => {
  return (
    <button type={buttonType} className={buttonClass}>
      <a href={buttonLink}>{buttonText}</a>
    </button>
  )
}

export default Button