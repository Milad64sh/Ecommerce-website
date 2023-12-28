import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
function Rating() {
  const [rate, setRate] = useState(0);

  return (
    <div className='rateContent'>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label key={index} className='rateContent__label'>
            <input
              type='radio'
              className='rateContent__radio'
              value={givenRating}
              onChange={() => setRate(givenRating)}
            />
            <div className='rateContent__rate'>
              <FaStar
                color={givenRating <= rate ? '#000' : 'rgb(192,192,192)'}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
