import { Link } from 'react-router-dom';
function Product(props) {
  const { title, quickInfo, img, inCart } = props.product;
  return (
    <div className='pr'>
      <div className='pr--imgCn'>
        <Link to={'/detail'} className='pr--imgCn--lk'>
          <img src={img} alt='product' className='pr--imgCn--img' />
        </Link>
      </div>
      <div className='pr--dtls'>
        <h3 className='pr--dtls--h3'>{title}</h3>
        <p className='pr--dtls--p'>{quickInfo}</p>
        <button className='pr--btn btn' disabled={inCart ? true : false}>
          {inCart ? 'In Bag' : 'Add To Bag'}
        </button>
      </div>
    </div>
  );
}

export default Product;
