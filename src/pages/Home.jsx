import { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import Slide from '../components/cart/Slide';
import BestSeller from '../components/BestSeller';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
// SWIPER
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation, EffectFade]);

function Home() {
  const { products } = useContext(ProductContext);
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
            <h2 className='allp-h2 hdng-2'>our gifting favorites</h2>
            <h3 className='allp-h3 hdng-3'>
              Give the gift of smoothing, hydrating, and glow-giving faves
            </h3>
          </div>
          <div className='sld'>
            <Swiper
              modules={[Navigation, EffectFade]}
              navigation
              effect
              speed={800}
              slidesPerView={2}
              className='sld-swpr'
            >
              <SwiperSlide>
                {products.map((product) => {
                  return (
                    product.gift && <Slide key={product.id} product={product} />
                  );
                })}
              </SwiperSlide>
            </Swiper>
          </div>
          <Link to={'/products'}>all products</Link>
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
