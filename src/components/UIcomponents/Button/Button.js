import React from 'react'
import {Link} from 'react-scroll'
import './Button.scss'

const Button = ({ buttonLink, buttonClass, buttonText,buttonType }) => {
  return (
    <button type={buttonType} className={buttonClass}>
      <Link to={buttonLink} smooth={true}>{buttonText}</Link>
    </button>
  )
}

export default Button