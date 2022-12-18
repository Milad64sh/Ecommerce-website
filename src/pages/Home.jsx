import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import SmallCart from '../components/cart/SmallCart';
import BestSeller from '../components/BestSeller';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

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
      <main>
        <section className='sctn'>
          <div className='hdng'>
            <h2 className='allp-h2 hdng-2'>our products</h2>
            <h3 className='allp-h3 hdng-3'>
              we select from best brands in the world their best products
            </h3>
          </div>
          <div className='sld'>
            <SmallCart />
            {/* <SmallCart />
            <SmallCart />
            <SmallCart /> */}
          </div>
        </section>
        <section className='sctn'>
          <div className='sctn-bst-sllr'>
            <BestSeller />
          </div>
        </section>
        <section className='sctn'>
          <div className='sle hdng'>
            <h2 className=' hdng-2'>sale</h2>
            <h3 className='hdng-3'>check our exclusive offers</h3>
          </div>
          <div className='sctn-sale'>
            <Sale />
          </div>
        </section>
        <section className='sctn'>
          <div className='sctn-footer'>
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
