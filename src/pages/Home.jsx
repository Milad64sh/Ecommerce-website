import { useContext, useRef, useState } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import Navbar from '../components/navbar/Navbar';
import Slide from '../components/cart/Slide';
import BestSeller from '../components/BestSeller';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
function Home() {
  const {
    giftProducts,
    saleProducts,
    products,
    currInx,
    setSearchResults,
    searchResults,
  } = useContext(ProductContext);

  // SCROLL HORIZONTAL
  const [scrollPosition, setScrollPosition] = useState(0);
  const ITEM_WIDTH = 212;
  const slideRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    slideRef.current.scrollLeft = scrollPosition;
    console.log(scrollPosition);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(products);
    const resultsArray = products.filter(
      (product) =>
        product.title.includes(e.target.value) ||
        product.company.includes(e.target.value) ||
        product.productType.includes(e.target.value)
    );
    console.log(resultsArray);
    console.log(searchResults);
    setSearchResults(resultsArray);
  };

  return (
    <>
      <Navbar />

      <div className='home'>
        <div className='hro'>
          <h1 className='hro--hdng'>
            ready for <span className='hro--hdng--span'>50%</span>off?
          </h1>
          <Link to={'/products'} className='hro--btn'>
            all products
          </Link>
          <div className='search'>
            <form className='search__frm' onSubmit={handleSubmit}>
              <input
                type='text'
                className='search__frm--ipt'
                placeholder='Search products'
                id='search'
                onChange={handleSearchChange}
              />
              <span className='search__frm--icn'>
                <CiSearch />
              </span>
            </form>
          </div>
        </div>
      </div>
      <main>
        {searchResults.length > 0 ? (
          <SearchPage />
        ) : (
          <>
            {/* GIFT SECTION */}
            <section className='sctn'>
              <div className='hdng'>
                <h2 className='allp-h2 hdng-2'>our gifting favorites</h2>
                <h3 className='allp-h3 hdng-3'>
                  Give the gift of smoothing, hydrating, and glow-giving faves
                </h3>
              </div>
              <div className='gift'>
                <div
                  ref={slideRef}
                  style={{
                    width: '1100px',
                    overflowX: 'scroll',
                    scrollBehavior: 'smooth',
                  }}
                >
                  <div className='gift__slide'>
                    {giftProducts.map((gift, index) => (
                      <Slide
                        key={index}
                        index={index}
                        currInx={currInx}
                        gift={gift}
                      />
                    ))}
                  </div>
                </div>
                <div className='gift__arrows'>
                  <IoIosArrowDropleftCircle
                    onClick={() => {
                      handleScroll(-ITEM_WIDTH);
                    }}
                    className='gift__arrows--arrow'
                  />
                  <IoIosArrowDroprightCircle
                    onClick={() => {
                      handleScroll(ITEM_WIDTH);
                    }}
                    className='gift__arrows--arrow'
                  />
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
                {saleProducts.map((product, index) => {
                  return <Sale key={index} product={product} />;
                })}
              </div>
            </section>
          </>
        )}
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
