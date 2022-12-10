import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='hro'>
          <h1 className='hro--hdng'>feel the summer?</h1>
          <button className='hro--btn'>shop now</button>
          <div className='search'>
            <form className='search__frm'>
              <input
                type='text'
                className='search__frm--ipt'
                placeholder='Search summer products'
              />
              <span className='search__frm--icn'>
                <CiSearch />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
