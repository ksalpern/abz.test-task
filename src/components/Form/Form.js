import React from 'react'
import Button from '../UIcomponents/Button/Button'
import Input from '../UIcomponents/Input/Input'
import './Form.scss'

const Form = () => {
  return (
    <div id='signUp' className='form'>
      <div className="container">
        <h2>Working with POST request</h2>
        <form action="#">
          <Input inputLabel='Your name' inputClass='' />
          <Input inputLabel='Email' inputClass='' />
          <Input inputLabel='Phone' inputClass='' inputHelperText='+38 (XXX) XXX - XX - XX' />
          <Button buttonType='submit' buttonText='Sign up' buttonClass='btn disabled' buttonLink='#' />
        </form>
      </div>
    </div>
  )
}

export default Form
