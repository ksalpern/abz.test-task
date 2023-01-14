import React from 'react'
import './Button.scss'

const Button = ({ buttonLink, buttonClass, buttonText }) => {
  return (
    <button className={buttonClass}>
      <a href={buttonLink}>{buttonText}</a>
    </button>
  )
}

export default Button