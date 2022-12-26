import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import ProductContext from '../context';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
function Detail() {
  const [showMore, setShowMore] = useState(false);
  const { detailPrd } = useContext(ProductContext);
  console.log(detailPrd);
  const {
    id,
    img,
    quickInfo,
    info,
    title,
    company,
    productType,
    price,
    discountPrice,
    inCart,
    sale,
  } = detailPrd;
  const showInfo = () => setShowMore(!showMore);
  return (
    <>
      <Navbar />
      <div className='dtl'>
        <div className='dtl__img'>
          <img src={img} alt='product' />
        </div>
        <div className='dtl__cnt'>
          <h2 className='dtl__cnt--h2'>{title}</h2>
          <h3 className='dtl__cnt--h3'>company: {company}</h3>
          <h3 className='dtl__cnt--h3'>
            price:&nbsp;
            <span className={sale ? 'dtl__cnt--prc-crossed' : 'dtl__cnt--prc'}>
              ${price}
            </span>
            <span className={sale && 'dtl__cnt--prc-show'}>
              ${discountPrice}
            </span>
          </h3>
          <p className='dtl__cnt--qInfo'>
            {quickInfo}
            <span className='dtl__cnt--rm' onClick={showInfo}>
              {showMore ? 'read less' : 'read more'}
            </span>
          </p>
          {showMore && <p className='dtl__cnt--info'>{info}</p>}
        </div>
      </div>
      <section className='sctn'>
        <div className='sctn-footer'>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Detail;
