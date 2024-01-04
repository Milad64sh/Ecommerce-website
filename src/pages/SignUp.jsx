import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [inputType, setInputType] = useState('text');
  const [emailValue, setEmailValue] = useState('');
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isPasswordLengthIsValid, setIsPasswordLengthIsValid] = useState(true);
  const [isPasswordCharacterIsValid, setIsPasswordCharacterIsValid] =
    useState(true);
  const [emptyInputs, setEmptyInputs] = useState([]);

  // HANDLE CHECKING INPUT VALUE

  // const handleChange = (e) => {
  //   setIsInputEmpty(e.target.value.trim() === '');
  //   setEmailValue(e.target.value);
  // };

  // Minimum password length
  const MIN_PASSWORD_LENGTH = 8;
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Assuming your input names match your state variables, you can dynamically set the state
    // based on the input name.
    switch (name) {
      case 'email':
        setEmailValue(value);
        break;
      case 'firstName':
        setFirstNameValue(value);
        break;
      case 'lastName':
        setLastNameValue(value);
        break;
      case 'password':
        setPasswordValue(value);
        setIsPasswordLengthIsValid(value.length >= MIN_PASSWORD_LENGTH);
        setIsPasswordCharacterIsValid(
          /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value)
        );
        break;
      case 'date':
        setDateValue(value);
        break;
      // Add more cases if you have additional inputs

      default:
        break;
    }
  };
  const handleClick = () => {
    const inputsToCheck = [
      { name: 'email', value: emailValue },
      { name: 'firstName', value: firstNameValue },
      { name: 'lastName', value: lastNameValue },
      { name: 'password', value: passwordValue },
      { name: 'date', value: dateValue },
      // Add more inputs to check if needed
    ];
    const emptyInputsList = inputsToCheck
      .filter((input) => input.value.trim() === '')
      .map((input) => input.name);
    setEmptyInputs(emptyInputsList);
    if (
      (emptyInputsList.length === 0 && emailValue.trim() === '') ||
      firstNameValue.trim() === '' ||
      lastNameValue.trim() === '' ||
      passwordValue.trim() === '' ||
      dateValue.trim() === ''
    ) {
      setIsInputEmpty(true);
    }
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
          <div className='signup__form__namesSection'>
            <div className='signup__form__namesSection__names'>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                className={`signup__form__namesSection__names__input ${
                  isInputEmpty ? 'empty' : ''
                } `}
                value={firstNameValue}
                onChange={handleChange}
              />

              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                className={`signup__form__namesSection__names__input ${
                  isInputEmpty ? 'empty' : ''
                } `}
                value={lastNameValue}
                onChange={handleChange}
              />
            </div>
            <div className='signup__form__namesSection__errors'>
              {isInputEmpty && (
                <p className='signup__form__namesSection__errors__error'>
                  Required
                </p>
              )}
              {isInputEmpty && (
                <p className='signup__form__namesSection__errors__error'>
                  Required
                </p>
              )}
            </div>
          </div>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className={`signup__form__input ${isInputEmpty ? 'empty' : ''} `}
            value={passwordValue}
            onChange={handleChange}
          />
          <div className='signup__form__ps'>
            {isInputEmpty && (
              <p className='signup__form__ps__error'>Required</p>
            )}
            <p
              className={`signup__form__ps__p ${
                !isPasswordLengthIsValid ? 'error' : ''
              }`}
            >
              X Minimum of 8 characters
            </p>
            <p
              className={`signup__form__ps__p ${
                !isPasswordCharacterIsValid ? 'error' : ''
              }`}
            >
              X Uppercase, lowercase, and one number
            </p>
          </div>
          <input
            id='date'
            placeholder='Date of Birth'
            className={`signup__form__input ${isInputEmpty ? 'empty' : ''} `}
            name='date'
            type={inputType}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={dateValue}
            onChange={handleChange}
          />
          {isInputEmpty && <p className='signup__form__error'>Required</p>}
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
