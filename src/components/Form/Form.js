import React, { useState } from 'react'
import Button from '../UIcomponents/Button/Button'
import Input from '../UIcomponents/Input/Input'
import RadioButtons from '../UIcomponents/RadioButtons/RadioButtons'
import UploadImage from '../UIcomponents/UploadImage/UploadImage'
import './Form.scss'

const Form = () => {
  const [values, setValues] = useState({ email: '', name: '', phone: '', position: '', photo: '' });
  const [name, changeName] = useState('');
  const [email, changeEmail] = useState('');
  const [phone, changePhone] = useState('');
  const [position, changePosition] = useState('Designer');
  const [photo, changePhoto] = useState({});
  const [error, setError] = useState(false);

  // const validateAndSubmitForm = (e) => {
    // e.preventDefault();

    // const errors = {};

    // if (!isEmail(values.email)) {
    //   errors.email = 'Wrong email';
    // }

    // setErrors(errors);

    // if (!Object.keys(errors).length) {
    //   alert(JSON.stringify(values, null, 2));
    // }
  // };

  console.log(email)
  console.log(position)
  console.log(photo)
  return (
    <div id='signUp' className='form'>
      <div className='container'>
        <h2>Working with POST request</h2>
        <form action='#'>
          <Input inputLabel='Your name' inputClass='' inputValue={name} onInputValueChange={changeName} />
          <Input inputLabel='Email' inputClass='' inputValue={email} onInputValueChange={changeEmail} />
          <Input inputLabel='Phone' inputClass='' inputHelperText='+38 (XXX) XXX - XX - XX' inputValue={phone} onInputValueChange={changePhone} />
          <RadioButtons inputValue={position} onInputValueChange={changePosition} />
          <UploadImage inputValue={photo} onInputValueChange={changePhoto} />
          <Button buttonType='submit' buttonText='Sign up' buttonClass='btn disabled' buttonLink='#' />
        </form>
      </div>
    </div>
  )
}

export default Form
