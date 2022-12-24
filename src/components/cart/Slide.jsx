import { Link } from 'react-router-dom';
import { useState } from 'react';

// CONTEXT
import { useContext } from 'react';
import ProductContext from '../../context';

function Slide({ products }) {
  const { currInx } = useContext(ProductContext);
  const [{ img, quickInfo, title }] = products;

  return (
    <>
      <div className={products[currInx] && 'sm-crd'}>
        <Link to={'/detail'} className='sm-crd--btn'>
          <button className='sm-crd--btn--d'>details</button>
        </Link>
        <div className='sm-crd--img'>
          <img src={img} alt='product' />
        </div>
        <div className='sm-crd--dtls'>
          <h3 className='sm-crd--dtls--h4'>{title}</h3>
          <p className='sm-crd--dtls--p'>{quickInfo}</p>
          <button className='btn'>add to bag</button>
        </div>
      </div>
    </>
  );
}

export default Slide;
