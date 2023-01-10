import { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import Slide from '../components/cart/Slide';
import BestSeller from '../components/BestSeller';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import ArrowLeft from '../assets/jpg/icons/arrow-204.png';
import ArrowRight from '../assets/jpg/icons/arrow-203.png';
function Home() {
  const {
    goToPrev,
    goToNext,
    giftProducts,
    saleProducts,
    currInx,
    setCurrInx,
  } = useContext(ProductContext);
  const showSlide = (pInx) => {
    setCurrInx(pInx);
  };

  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='hro'>
          <h1 className='hro--hdng'>feel the summer?</h1>
          <Link to={'/products'} className='hro--btn'>
            all products
          </Link>
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
        {/* SALE SECTION */}
        <section className='sctn'>
          <div className='hdng'>
            <h2 className='allp-h2 hdng-2'>our gifting favorites</h2>
            <h3 className='allp-h3 hdng-3'>
              Give the gift of smoothing, hydrating, and glow-giving faves
            </h3>
          </div>
          <div className='gft'>
            <div className='gft--sld'>
              <img
                src={ArrowLeft}
                alt='arrow left'
                className='arrow'
                onClick={goToPrev}
              />
              {giftProducts.map(
                (gift, index) =>
                  index === currInx && <Slide key={index} gift={gift} />
              )}
              <img
                src={ArrowRight}
                alt='arrow right'
                className='arrow'
                onClick={goToNext}
              />
            </div>
            <div className='gft--dts'>
              {giftProducts.map((p, pInx) => {
                return (
                  <div
                    className={
                      pInx === currInx ? 'gft--dts--dt' : 'gft--dts--dt--active'
                    }
                    key={pInx}
                    onClick={() => showSlide(pInx)}
                  >
                    &#9679;
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* BEST SELLER */}
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
            {saleProducts.map((product) => {
              return <Sale product={product} />;
            })}
          </div>
        </section>
        {/* FOOTER SECTION */}
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
