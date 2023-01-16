import React from 'react'
import './Input.scss'

const Input = ({ inputClass, inputLabel, inputHelperText, onInputValueChange, inputValue }) => {
  return (
    <div class="input__cover">
      <input className={inputClass} type="text" required name="name" value={inputValue} onChange={(e) => onInputValueChange(e.target.value)} />
      <label>{inputLabel}</label>
      <span className="input__helper">{inputHelperText}</span>
    </div>
  )
}

export default Input