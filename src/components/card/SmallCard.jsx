import { Link } from 'react-router-dom';
function SmallCard() {
  return (
    <div className='sm-crd'>
      <Link to={'/detail'} className='sm-crd--btn'>
        <button className='sm-crd--btn--d'>details</button>
      </Link>
      <div className='sm-crd--img'></div>
      <div className='sm-crd--dtls'>
        <h3 className='sm-crd--dtls--h4'>name of the product</h3>
        <p className='sm-crd--dtls--p'>some details about product</p>
        <button className='sm-crd--dtls--btn'>add to card</button>
      </div>
    </div>
  );
}

export default SmallCard;
