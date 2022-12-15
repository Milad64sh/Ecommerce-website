import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import SmallCart from '../components/cart/SmallCart';
import { Link } from 'react-router-dom';
import BestSeller from '../components/BestSeller';

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
        <div className='hdng'>
          <h2 className='hdng-2'>our products</h2>
          <h3 className='hdng-3'>
            we select from best brands in the world their best products
          </h3>
        </div>
        <main>
          <section className='sctn'>
            <div className='sctn-sld'>
              <div className='sld'>
                <SmallCart />
                <SmallCart />
                <SmallCart />
                <SmallCart />
                <SmallCart />
              </div>
            </div>
          </section>
          <section className='sctn'>
            <BestSeller />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
