import React from 'react'
import './Input.scss'

const Input = ({ inputClass, inputLabel, inputHelperText }) => {
  return (
    <div class="input__cover">
      <input className={inputClass} type="text" required name="name" />
      <label>{inputLabel}</label>
      <span className="input__helper">{inputHelperText}</span>
    </div>
  )
}

export default Input