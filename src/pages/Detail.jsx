import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import ProductContext from '../context';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import Rating from '../components/Rating';

function Detail() {
  const [showMore, setShowMore] = useState(false);
  const { productId } = useParams();

  const { detailPrd, addToBag, fetchProductDetails } =
    useContext(ProductContext);

  useEffect(() => {
    fetchProductDetails(productId);
  }, [fetchProductDetails, productId]);

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
    rating,
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
          <h3 className='dtl__cnt--h3'>
            product type:&nbsp;
            <span className='dtl__cnt--h3--sp'>{productType}</span>
          </h3>
          <h3 className='dtl__cnt--h3'>
            company: <span className='dtl__cnt--h3--sp'>{company}</span>
          </h3>
          <h3 className='dtl__cnt--h3'>
            price:&nbsp; &nbsp;
            <span className={sale ? 'dtl__cnt--prc-crossed' : 'dtl__cnt--prc'}>
              ${price}
            </span>
            <span
              className={sale ? 'dtl__cnt--prc-show' : 'dtl__cnt--prc-notShow'}
            >
              ${discountPrice}
            </span>
          </h3>
          <p className='dtl__cnt--qInfo'>{quickInfo}</p>
          {showMore && <p className='dtl__cnt--info'>{info}</p>}
          &nbsp;
          <span className='dtl__cnt--rm' onClick={showInfo}>
            {showMore ? 'read less' : 'read more'}
          </span>
          <Rating productRating={rating} />
          <div className='dtl__cnt--btns'>
            <button
              className='dtl__cnt--btns--add btn'
              disabled={inCart ? true : false}
              onClick={() => {
                addToBag(id);
              }}
            >
              {inCart ? 'adding to cart' : 'add to bag'}
            </button>
          </div>
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
