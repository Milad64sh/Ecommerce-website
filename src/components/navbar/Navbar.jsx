import { RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { navItems } from '../../NavItems';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
function Navbar() {
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showMenDropdown, setShowMenDropdown] = useState(false);

  return (
    <>
      <nav className='nav'>
        <Link to={'/'} className='nav__lgo'>
          <div className='lgo-lt-1'>E</div>
          <div className='lgo-lt-2'>D</div>
          <div className='lgo-lt-3'>O</div>
        </Link>
        <div className='nav__mnu'>
          <ul className='lst'>
            {navItems.map((item) => {
              if (item.title === 'women') {
                return (
                  <li
                    key={item.id}
                    className='lst--itm'
                    onMouseEnter={() => setShowWomenDropdown(true)}
                    onMouseLeave={() => setShowWomenDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {showWomenDropdown && <WomenDropdown />}
                  </li>
                );
              }
              if (item.title === 'men') {
                return (
                  <li
                    key={item.id}
                    className='lst--itm'
                    onMouseEnter={() => setShowMenDropdown(true)}
                    onMouseLeave={() => setShowMenDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {showMenDropdown && <MenDropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className='lst--itm'>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
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
      </nav>
    </>
  );
}

export default Navbar;
