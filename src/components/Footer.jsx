import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitterSquare, FaTiktok } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

function Footer() {
  const [openCoLnks, setOpenCoLnks] = useState(false);
  const [openCuLnks, setOpenCuLnks] = useState(false);
  const openCoLinks = () => setOpenCoLnks(!openCoLnks);
  const openCuLinks = () => setOpenCuLnks(!openCuLnks);
  return (
    <div className='ftr'>
      <Link to={'/'} className='ftr--lgo'>
        <div className='ftr--lgo--lts'>
          <div className='lgo-lt-1'>E</div>
          <div className='lgo-lt-2'>D</div>
          <div className='lgo-lt-3'>O</div>
        </div>
      </Link>
      <div className='ftr--cnt'>
        <div className='ftr--cnt--cl1 cl'>
          <h2 className='ftr-hdng2' onClick={openCoLinks}>
            Our Company
            {openCoLnks ? (
              <MdOutlineKeyboardArrowUp className='ftr-hdng2--arr' />
            ) : (
              <MdOutlineKeyboardArrowDown className='ftr-hdng2--arr' />
            )}
          </h2>
          <div className={openCoLnks ? 'ftr-lnks lnks-open' : 'ftr-lnks'}>
            <Link className='ftr-lnk'>who we are</Link>
            <Link className='ftr-lnk'>EDO spa</Link>
            <Link className='ftr-lnk'>Shop</Link>
          </div>
        </div>
        <div className='ftr--cnt--cl2 cl'>
          <h2 className='ftr-hdng2' onClick={openCuLinks}>
            customer care{' '}
            {openCuLnks ? (
              <MdOutlineKeyboardArrowUp className='ftr-hdng2--arr' />
            ) : (
              <MdOutlineKeyboardArrowDown className='ftr-hdng2--arr' />
            )}
          </h2>
          <div className={openCuLnks ? 'ftr-lnks lnks-open' : 'ftr-lnks'}>
            <Link className='ftr-lnk'>gift cards</Link>
            <Link className='ftr-lnk'>contact us</Link>
            <Link className='ftr-lnk'>shipping</Link>
            <Link className='ftr-lnk'>returns</Link>
          </div>
        </div>
        <div className='ftr--cnt--cl3 cl'>
          <h2 className='ftr-hdng2'>how to find us</h2>
          <div className='icns'>
            <Link className='icns--lnk'>
              <BsInstagram className='icns--lnk--icn' />
            </Link>
            <Link className='icns--lnk'>
              <FaTwitterSquare className='icns--lnk--icn' />
            </Link>
            <Link className='icns--lnk'>
              <ImYoutube2 className='icns--lnk--icn' />
            </Link>
            <Link className='icns--lnk'>
              <FaTiktok className='icns--lnk--icn' />
            </Link>
            <Link className='icns--lnk'>
              <MdEmail className='icns--lnk--icn' />
            </Link>
          </div>
          <div className='copyright'>
            &#169; 2022 by M. Shalikarian, all rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
