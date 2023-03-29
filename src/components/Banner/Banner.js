import React from 'react'
import Button from '../UIcomponents/Button/Button'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <h1>Test assignment for front-end developer</h1>
        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <Button buttonText='Sign up' buttonClass='btn' buttonLink='signUp' />
      </div>
    </div>
  )
}

export default Banner