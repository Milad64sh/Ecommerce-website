import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
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
          <h3>Now let's make you a EDO member.</h3>
        </div>
        <form action='' className='signup__form'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='signup__form__input'
          />
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
            type='date'
            name='date'
            id='date'
            placeholder='Date of Birth'
            className='signup__form__input'
          />
          <button className='signup__form__btn'>continue</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
