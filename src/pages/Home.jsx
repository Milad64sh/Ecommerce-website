import Navbar from '../components/navbar/Navbar';
import { CiSearch } from 'react-icons/ci';
import SmallCard from '../components/card/SmallCard';

import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation, EffectFade]);
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
          <h2 className='hdng-2'>summer gifts</h2>
          <h3 className='hdng-3'>
            Give the gift of smoothing, protecting and hydrating faves
          </h3>
        </div>
        <main>
          <section className='sctn-prds'>
            <div className='sld'>
              <Swiper
                modules={[Navigation, EffectFade]}
                navigation={true}
                effect
                speed={800}
                slidesPerView={1}
                loop
              >
                <SwiperSlide>
                  <SmallCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
