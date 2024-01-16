import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.name);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    const isEmailRegistered = checkIfEmailExists(email);
    if (isEmailRegistered) {
      navigate(`/home?email=${encodeURIComponent(email)}`);
      console.log(isEmailRegistered);
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
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='auth__form__input'
          />
          <p className='auth__form__p'>
            By continuing, you agree to EDO's terms of Use and you confirm you
            have read EDO Privacy Policy
          </p>
          <Link to={'/signup'} className='auth__form__link'>
            create account
          </Link>
          <button onClick={handleContinue} className='auth__form__btn'>
            continue
          </button>
        </form>
      </div>
    </>
  );
}

export default Auth;
