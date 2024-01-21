import React from 'react';
import { Link } from 'react-router-dom';

function Fashion() {
  return (
    <div className='fashion'>
      <div className='fashion--cnt'>
        <div className='fashion--cnt--hdng-2'>Style</div>
        <Link to={'/'}>
          <button className='fashion--cnt--btn'>style</button>
        </Link>
      </div>
      <div className='fashion--bcg'></div>
    </div>
  );
}

export default Fashion;
