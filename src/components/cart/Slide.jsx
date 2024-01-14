import { Link } from 'react-router-dom';

function Slide({ gift }) {
  const { img, title, discountPrice, price, sale } = gift;

  return (
    <>
      <div className='sm-crd'>
        <Link to={'/detail'} className='sm-crd__btn'>
          <div className='sm-crd__btn--img'>
            <img src={img} alt='product' />
          </div>
        </Link>
        <div className='sm-crd--dtls'>
          <h3 className='sm-crd--dtls--h4'>{title}</h3>
          <h3 className='sm-crd--dtls--h3'>
            price:&nbsp; &nbsp;
            <span
              className={
                sale ? 'sm-crd--dtls--h3--prc-crossed' : 'sm-crd--dtls--h3--prc'
              }
            >
              ${price}
            </span>
            <span
              className={
                sale
                  ? 'sm-crd--dtls--h3--prc-show'
                  : 'sm-crd--dtls--h3--prc-notShow'
              }
            >
              ${discountPrice}
            </span>
          </h3>
          <button className='sm-crd--dtls--btn btn'>quick buy</button>
        </div>
      </div>
    </>
  );
}

export default Slide;
