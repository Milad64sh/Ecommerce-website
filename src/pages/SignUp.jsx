import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [inputType, setInputType] = useState('text');
  const [emailValue, setEmailValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  // HANDLE CHECKING INPUT VALUE

  const handleChange = (e) => {
    setIsInputEmpty(e.target.value.trim() === '');
    setEmailValue(e.target.value);
  };
  const handleClick = () => {
    if (emailValue.trim() === '') {
      setIsInputEmpty(true);
    }
    console.log('clicked');
  };

  useEffect(() => {
    // Clear input values on component mount
    setEmailValue('');
    setIsInputEmpty(false);
  }, []);
  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailValue('');
  };

  // HANDLE DATE PLACEHOLDER
  const handleInputFocus = () => {
    setInputType('date');
  };
  const handleInputBlur = () => {
    setInputType('text');
    console.log(inputType);
  };
  return (
    <>
      <div className='signup'>
        <nav className='signup__nav'>
          <Link to={'/'} className='nav__lgo'>
            <div className='nav__lgo__lts'>
              <div className='lgo-lt-1'>E</div>
              <div className='lgo-lt-2'>D</div>
              <div className='lgo-lt-3'>O</div>
            </div>
          </Link>
        </nav>
        <div className='signup__title'>
          <h3>Now let's make you an EDO member.</h3>
        </div>
        <form onSubmit={handleSubmit} className='signup__form'>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            className={`signup__form__input ${isInputEmpty ? 'empty' : ''}`}
            value={emailValue}
            onChange={handleChange}
          />
          {isInputEmpty && <p className='signup__form__error'>Required</p>}
          <div className='signup__form__names'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              className='signup__form__names__input'
            />
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              className='signup__form__names__input'
            />
          </div>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='signup__form__input'
          />
          <div className='signup__form__ps'>
            <p className='signup__form__ps__p'>X Minimum of 8 characters</p>
            <p className='signup__form__ps__p'>
              X Uppercase, lowercase, and one number
            </p>
          </div>
          <input
            id='date'
            placeholder='Date of Birth'
            className='signup__form__input'
            name='date'
            type={inputType}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button
            onClick={handleClick}
            type='submit'
            className='signup__form__btn'
          >
            continue
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
