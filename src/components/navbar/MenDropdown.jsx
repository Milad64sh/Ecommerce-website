import { menDropdown } from '../../NavItems';
import { Link } from 'react-router-dom';

import { useState } from 'react';

function MenDropdown() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? 'lstdd close' : 'lstdd'}
        onClick={() => setDropdown(!dropdown)}
      >
        {menDropdown.map((item) => {
          return (
            <li key={item.id} className='lstdd--itm'>
              <Link to={item.path} onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MenDropdown;
