import React from 'react'
import './Header.scss'
import logo from '../../assets/Logo.svg'
import Button from '../UIcomponents/Button/Button'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav>
          <a href="#"><img src={logo} alt="logo" /></a>
          <div className="header__buttons">
            <Button buttonText='Users' buttonClass='btn' buttonLink='users' />
            <Button buttonText='Sign up' buttonClass='btn' buttonLink='signUp' />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header