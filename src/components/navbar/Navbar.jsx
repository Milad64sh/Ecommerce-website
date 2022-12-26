import { RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { navItems } from '../../NavItems';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
function Navbar() {
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <nav className='nav'>
        <div className={`navIcn ${openMenu && 'clicked'}`} onClick={toggleMenu}>
          <span className='navIcn--btn'>&nbsp;</span>
        </div>
        <Link to={'/'} className='nav__lgo'>
          <div className='nav__lgo__lts'>
            <div className='lgo-lt-1'>E</div>
            <div className='lgo-lt-2'>D</div>
            <div className='lgo-lt-3'>O</div>
          </div>
        </Link>
        <div className={`nav__mnu ${openMenu && 'open'}`}>
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
                    {showWomenDropdown ? (
                      <MdOutlineKeyboardArrowLeft className='lst--itm--arr' />
                    ) : (
                      <MdOutlineKeyboardArrowRight className='lst--itm--arr' />
                    )}
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
                    {showMenDropdown ? (
                      <MdOutlineKeyboardArrowLeft className='lst--itm--arr' />
                    ) : (
                      <MdOutlineKeyboardArrowRight className='lst--itm--arr' />
                    )}
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
          <div className='nav__usr__icnBx'>
            <Link to={'/'} className='nav__usr--icn'>
              <RxPerson />
            </Link>
          </div>
          <div className='nav__usr__icnBx'>
            <Link to={'/'} className='nav__usr--icn'>
              <HiOutlineShoppingBag />
            </Link>
            <span className='nav__usr--ntf'>0</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
