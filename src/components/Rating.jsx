import { FaStar } from 'react-icons/fa';
function Rating({ productRating }) {
  return (
    <div className='rateContent__rate'>
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar
          key={index}
          color={index <= productRating ? '#000' : 'rgb(192,192,192)'}
        />
      ))}
    </div>
  );
}

export default Rating;
