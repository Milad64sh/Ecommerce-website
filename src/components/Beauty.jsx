import React from 'react';
import { Link } from 'react-router-dom';

function Beauty() {
  return (
    <div className='beauty'>
      <div className='beauty--cnt'>
        <div className='beauty--cnt--hdng-2'>beauty</div>
        <Link to={'/'} className='beauty--cnt--link'>
          <button className='beauty--cnt--btn'>beauty</button>
        </Link>
      </div>
      <div className='beauty--bcg'></div>
    </div>
  );
}

export default Beauty;
