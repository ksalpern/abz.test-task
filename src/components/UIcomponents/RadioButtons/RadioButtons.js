import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RadioButton from './RadioButton/RadioButton';
import './RadioButtons.scss'
import './RadioButton/RadioButton.scss'

const RadioButtons = ({ onInputValueChange, inputValue }) => {
  const [positions, setPositions] = useState([]);
  console.log(positions)

  useEffect(() => {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      )
      .then((res) => {
        setPositions([...positions, ...res.data.positions]);
        console.log(res.data.positions.id); 
        console.log(res.data); 
      })
  }, []);

  return (
    <div className='radioButtons'>
      <p>Select your position</p>
      {positions.map(position => (
        // <RadioButton key={position.id} position={position} inputValue={position} onInputValueChange={changePosition} />
        <div key={position.id} className='radioButton'>
          <input type="radio"
            required 
            id={position.id} 
            name="radio-group"
            checked={position.name === inputValue}
            value={position.name} onChange={(e) => onInputValueChange(e.currentTarget.value)} />
          <label htmlFor={position.id}>{position.name}</label>
        </div>
      ))}
    </div>
  )
}

export default RadioButtons
