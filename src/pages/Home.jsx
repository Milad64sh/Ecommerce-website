import { useContext, useRef, useReducer } from 'react';
import ProductContext from '../context';
import SearchPage from './SearchPage';
import Navbar from '../components/navbar/Navbar';
import Slide from '../components/cart/Slide';
import Beauty from '../components/Beauty';
import Sale from '../components/Sale';
import Footer from '../components/Footer';

import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Hero from '../components/Hero';
import Fashion from '../components/Fashion';

const scrollReducer = (state, action) => {
  const totalItemsWidth = action.totalItemsWidth;
  const maxScrollPosition = Math.max(0, totalItemsWidth);
  switch (action.type) {
    case 'SCROLL':
      const newScrollPosition = Math.max(
        0,
        Math.min(state + action.payload, maxScrollPosition)
      );
      const reachedEnd = newScrollPosition === maxScrollPosition;

      if (!reachedEnd) {
        action.scrollRef.current.scrollLeft = newScrollPosition;
      }
      return newScrollPosition;
    default:
      return state;
  }
};

function Home() {
  const { giftProducts, saleProducts, currInx, searchResults } =
    useContext(ProductContext);

  // SCROLL HORIZONTAL
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [groupScrollPosition, setGroupScrollPosition] = useState(0);
  const ITEM_WIDTH = 260;
  const GROUP_WIDTH = 370;
  const SALE_WIDTH = 368;
  const slideRef = useRef();
  const groupsRef = useRef();
  const saleRef = useRef();

  const [scrollPosition, dispatchScroll] = useReducer(scrollReducer, 0);
  // Initial state for scrolling groups
  const [groupScrollPosition, dispatchGroupScroll] = useReducer(
    scrollReducer,
    0
  );
  const [saleScrollPosition, dispatchSaleScroll] = useReducer(scrollReducer, 0);
  const handleScroll = (scrollAmount) => {
    dispatchScroll({
      type: 'SCROLL',
      payload: scrollAmount,
      totalItemsWidth: giftProducts.length * ITEM_WIDTH,
      scrollRef: slideRef,
    });
    console.log(scrollPosition);
  };
  const handleScrollGroups = (scrollAmount) => {
    // const slideContainer = groupsRef.current;
    // const totalItemsWidth = Array.from(slideContainer.children).reduce(
    //   (totalWidth, child) => totalWidth + child.getBoundingClientRect().width,
    //   0
    // );
    dispatchGroupScroll({
      type: 'SCROLL',
      payload: scrollAmount,
      totalItemsWidth: GROUP_WIDTH * 2,
      scrollRef: groupsRef,
    });
    console.log('totalItemsWidth', GROUP_WIDTH * 2);
    console.log(groupScrollPosition);
  };

  const handleScrollSale = (scrollAmount) => {
    dispatchSaleScroll({
      type: 'SCROLL',
      payload: scrollAmount,
      totalItemsWidth: saleProducts.length * SALE_WIDTH,
      scrollRef: saleRef,
    });
    console.log('clicked', saleScrollPosition);
  };

  // const handleScroll = (scrollAmount) => {
  //   const totalItemsWidth = giftProducts.length * ITEM_WIDTH;
  //   const maxScrollPosition = Math.max(0, totalItemsWidth);
  //   setScrollPosition((prevScrollPosition) => {
  //     const newScrollPosition = Math.max(
  //       0,
  //       Math.min(prevScrollPosition + scrollAmount, maxScrollPosition)
  //     );
  //     const reachedEnd = newScrollPosition === maxScrollPosition;
  //     if (!reachedEnd) {
  //       slideRef.current.scrollLeft = newScrollPosition;
  //       console.log(newScrollPosition);
  //       console.log(scrollPosition);
  //     }

  //     return newScrollPosition;
  //   });
  // };

  // const handleScrollGroups = (scrollAmount) => {
  //   const totalItemsWidth = GROUP_WIDTH * 2 + GROUP_GAP;
  //   const maxScrollPosition = Math.max(0, totalItemsWidth);
  //   setGroupScrollPosition((prevScrollPosition) => {
  //     const newScrollPosition = Math.max(
  //       0,
  //       Math.min(prevScrollPosition + scrollAmount, maxScrollPosition)
  //     );
  //     const reachedEnd = newScrollPosition === maxScrollPosition;
  //     if (!reachedEnd) {
  //       groupsRef.current.scrollLeft = newScrollPosition;
  //       console.log(newScrollPosition);
  //       console.log(groupScrollPosition);
  //       console.log('clicked');
  //     }

  //     return newScrollPosition;
  //   });
  // };

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
            {/* GROUPS */}
            <section className='sctn'>
              <div className='sctn-groups'>
                <div className='groups'>
                  <div
                    ref={groupsRef}
                    style={{
                      width: '1100px',
                      overflowX: 'scroll',
                      scrollBehavior: 'smooth',
                    }}
                  >
                    <div className='groups__slide'>
                      <Beauty />
                      <Fashion />
                    </div>
                  </div>

                  <div className='groups__arrows'>
                    <IoIosArrowDropleftCircle
                      onClick={() => {
                        handleScrollGroups(-GROUP_WIDTH);
                      }}
                      className='groups__arrows--arrow'
                    />
                    <IoIosArrowDroprightCircle
                      onClick={() => {
                        handleScrollGroups(GROUP_WIDTH);
                      }}
                      className='groups__arrows--arrow'
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* SALE */}
            <section className='sctn'>
              <div className='sle hdng'>
                <h2 className='hdng-2'>sale</h2>
              </div>
              <div className='sctn-sale'>
                <div className='sale'>
                  <div
                    ref={saleRef}
                    style={{
                      width: '1100px',
                      overflowX: 'scroll',
                      scrollBehavior: 'smooth',
                    }}
                  >
                    <div className='sale__slide'>
                      {saleProducts.map((product, index) => {
                        return <Sale key={index} product={product} />;
                      })}
                    </div>
                  </div>
                </div>
                <div className='sale__arrows'>
                  <IoIosArrowDropleftCircle
                    onClick={() => {
                      handleScrollSale(-SALE_WIDTH);
                    }}
                    className='sale__arrows--arrow'
                  />
                  <IoIosArrowDroprightCircle
                    onClick={() => {
                      handleScrollSale(SALE_WIDTH);
                    }}
                    className='sale__arrows--arrow'
                  />
                </div>
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
