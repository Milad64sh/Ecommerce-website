import { RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header'>
      <div className='nav__lgo'>
        <div className='lgo-lt-1'>E</div>
        <div className='lgo-lt-2'>D</div>
        <div className='lgo-lt-3'>O</div>
      </div>
      <div className='nav__mnu'>
        <ul className='lst'>
          <li className='lst--itm'>men</li>
          <li className='lst--itm'>women</li>
          <li className='lst--itm'>sale</li>
          <li className='lst--itm'>customer choice</li>
          <li className='lst--itm'>domestics</li>
        </ul>
      </div>
      <div className='nav__usr'>
        <Link to={'/'} className='nav__usr--icn'>
          <RxPerson />
        </Link>
        <Link to={'/'} className='nav__usr--icn'>
          <HiOutlineShoppingBag />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
