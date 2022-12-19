import { Link } from 'react-router-dom';

import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation, EffectFade]);
function Slide() {
  return (
    <div className='sm-crd'>
      <Link to={'/detail'} className='sm-crd--btn'>
        <button className='sm-crd--btn--d'>details</button>
      </Link>
      <div className='sm-crd--img'>
        <img
          src={require('../../assets/jpg/prdt-img/serum-SkinCeuticals.jpg')}
          alt=''
        />
      </div>
      <div className='sm-crd--dtls'>
        <h3 className='sm-crd--dtls--h4'>name of the product</h3>
        <p className='sm-crd--dtls--p'>small details about product</p>
        <button className='btn'>add to bag</button>
      </div>
    </div>
  );
}

export default Slide;
