import React from 'react'
import './Loader.scss'
import loader from '../../../assets/Preloader.svg'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loader} alt="" />
    </div>
  )
}

export default Loader
