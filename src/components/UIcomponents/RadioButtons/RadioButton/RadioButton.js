import React from 'react'
import './RadioButton.scss'

const RadioButton = ({ position: { id, name }, onInputValueChange, inputValue }) => {
  return (
    <div className='radioButton'>
      <input type="radio" defaultChecked={true} required id={id} name="radio-group" value={inputValue} onChange={(e) => onInputValueChange(e.target.value)} />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default RadioButton
