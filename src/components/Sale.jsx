import { Link } from 'react-router-dom';

function Sale(props) {
  const { img, title, quickInfo, id, sale, price, discountPrice } =
    props.product;
  return (
    <div className='saleItem'>
      <Link to={'/detail'} className='saleItem__btn'>
        <div className='saleItem__btn--img'>
          <img src={img} alt='product' />
        </div>
      </Link>
      <div className='saleItem--dtls'>
        <h3 className='saleItem--dtls--h4'>{title}</h3>
        <p className='saleItem--dtls--info'>{quickInfo}</p>
        <h3 className='saleItem--dtls--h3'>
          price:&nbsp; &nbsp;
          <span
            className={
              sale
                ? 'saleItem--dtls--h3--prc-crossed'
                : 'saleItem--dtls--h3--prc'
            }
          >
            ${price}
          </span>
          <span
            className={
              sale
                ? 'saleItem--dtls--h3--prc-show'
                : 'saleItem--dtls--h3--prc-notShow'
            }
          >
            ${discountPrice}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Sale;
