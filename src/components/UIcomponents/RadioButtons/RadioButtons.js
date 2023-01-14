import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RadioButton from './RadioButton/RadioButton';
import './RadioButtons.scss'

const RadioButtons = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      )
      .then((res) => {
        // console.log(res.data.positions); 
        setPositions([...positions, ...res.data.positions]);
      })
  }, []);

  return (
    <div className='radioButtons'>
      {positions.map(position => (
        <RadioButton key={position.id} position={position} />
      ))}
    </div>
  )
}

export default RadioButtons
