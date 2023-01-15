import React from 'react'
import './RadioButton.scss'

const RadioButton = ({ position: { id, name } }) => {
  return (
    <div className='radioButton'>
      <input type="radio" defaultChecked={true} required id={id} name="radio-group" />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default RadioButton
