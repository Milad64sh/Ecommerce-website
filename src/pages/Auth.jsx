import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Auth() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    const isEmailRegistered = checkIfEmailExists(email);
    if (isEmailRegistered) {
      navigate(`/home?email=${encodeURIComponent(email)}`);
    } else {
      navigate('/signup');
    }
  };

  const checkIfEmailExists = (email) => {
    return true;
  };

  return (
    <>
      <div className='auth'>
        <nav className='auth__nav'>
          <Link to={'/'} className='nav__lgo'>
            <div className='nav__lgo__lts'>
              <div className='lgo-lt-1'>E</div>
              <div className='lgo-lt-2'>D</div>
              <div className='lgo-lt-3'>O</div>
            </div>
          </Link>
        </nav>
        <div className='auth__title'>
          <h3>Enter your email to join us or sign in.</h3>
        </div>
        <form action='' className='auth__form'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='auth__form__input'
          />
          <p className='auth__form__p'>
            By continuing, you agree to EDO's terms of Use and you confirm you
            have read EDO Privacy Policy
          </p>
          <button onClick={handleContinue} className='auth__form__btn'>
            continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
