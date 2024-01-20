import { useContext, useRef, useState } from 'react';
import ProductContext from '../context';
import SearchPage from './SearchPage';
import Navbar from '../components/navbar/Navbar';
import Slide from '../components/cart/Slide';
import BestSeller from '../components/BestSeller';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Hero from '../components/Hero';

function Home() {
  const { giftProducts, saleProducts, currInx, searchResults } =
    useContext(ProductContext);

  // SCROLL HORIZONTAL
  const [scrollPosition, setScrollPosition] = useState(0);
  const ITEM_WIDTH = 260;
  const slideRef = useRef();
  const handleScroll = (scrollAmount) => {
    const totalItemsWidth = giftProducts.length * ITEM_WIDTH;
    const maxScrollPosition = Math.max(0, totalItemsWidth);
    setScrollPosition((prevScrollPosition) => {
      const newScrollPosition = Math.max(
        0,
        Math.min(prevScrollPosition + scrollAmount, maxScrollPosition)
      );
      const reachedEnd = newScrollPosition === maxScrollPosition;
      if (!reachedEnd) {
        slideRef.current.scrollLeft = newScrollPosition;
        console.log(newScrollPosition);
        console.log(scrollPosition);
      }

      return newScrollPosition;
    });
  };

  // HANDLE SUBMIT

  return (
    <>
      <Navbar />
      <div className='home'>
        <Hero />
      </div>
      <main>
        {searchResults.length > 0 ? (
          <SearchPage />
        ) : (
          <>
            {/* GIFT SECTION */}
            <section className='sctn'>
              <div className='gft hdng'>
                <h2 className='hdng-2'>favorite gifts</h2>
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
                <h2 className='hdng-2'>sale</h2>
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
