import React from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
  return (
    <div className='bst-sllr'>
      <div className='bst-sllr--cnt'>
        <div className='bst-sllr--cnt--hdngs'>
          <h2 className='bst-sllr-h2 hdng-2'>best seller</h2>
          <h3 className='hdng-3'>
            Give the gift of choice this season! From body to skincare. We are a
            clean, cruelty-free, planet-friendly skincare brand that delivers
            transformative, dermatologist-tested products for total skin
            happiness.
          </h3>
        </div>
        <div className='bst-sllr--cnt--btns'>
          <Link to={'/detail'}>
            <button className='sllr-btn btn'>details</button>
          </Link>
          <button className='sllr-btn btn'>add to cart</button>
        </div>
      </div>
      <div className='bst-sllr--clrcb'></div>
      <div className='bst-sllr--img'>
        <img src={require('../assets/jpg/prdt-img/skin.jpg')} alt='' />
      </div>
    </div>
  );
}

export default BestSeller;
