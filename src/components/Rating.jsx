import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
function Rating() {
  const [rate, setRate] = useState(0);

  return (
    <div className='rteCont'>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <input
              type='radio'
              value={givenRating}
              onClick={() => setRate(givenRating)}
            />
            <div className='rteCont--rte'>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? '000'
                    : 'rgb(192,192,192)'
                }
              />
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default Rating;
