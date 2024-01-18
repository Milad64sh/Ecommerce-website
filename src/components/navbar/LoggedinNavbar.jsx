import { useState, useContext, useEffect } from 'react';
import ProductContext from '../../context';
import { Link } from 'react-router-dom';
import { RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { navItems } from '../../NavItems';
import WomenDropdown from './WomenDropdown';
import MenDropdown from './MenDropdown';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from 'react-icons/md';
import UserAuthContext from '../../userAuthcontext';
function LoggedinNavbar() {
  const { bag } = useContext(ProductContext);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);
  const [showMenDropdown, setShowMenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // FETCH AND COMPARE USERS
  const { user, usersFromFirestore, logout } = useContext(UserAuthContext);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleMenu = () => setOpenMenu(!openMenu);

  const matchUser = usersFromFirestore.find(
    (userData) => userData.emailValue === user.email
  );
  console.log(matchUser);

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
          {matchUser ? (
            <div className='nav__usr__name'>
              <p className='nav__usr__name--p'>Hi {matchUser.firstNameValue}</p>
              <button className='nav__usr__name--logout' onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className='nav__usr__icnBx'>
              <Link to={'/auth'} className='nav__usr--icn'>
                <RxPerson />
              </Link>
            </div>
          )}
          <div className='nav__usr__icnBx'>
            <Link to={'/bag'} className='nav__usr--icn'>
              <HiOutlineShoppingBag />
            </Link>
            <span className='nav__usr--ntf'>{bag.length}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LoggedinNavbar;
