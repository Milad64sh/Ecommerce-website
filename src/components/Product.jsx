import { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
function Product(props) {
  const { handleDetail, addToBag, handleModal } = useContext(ProductContext);
  const { id, title, quickInfo, img, inCart } = props.product;
  return (
    <div className='pr'>
      <button className='pr--qckBtn' onClick={handleModal}>
        quick view
      </button>
      <div className='pr--imgCn'>
        <Link to={'/detail'} className='pr--imgCn--lnk'>
          <img
            src={img}
            alt='product'
            className='pr--imgCn--img'
            onClick={() => {
              handleDetail(id);
            }}
          />
        </Link>
      </div>
      <div className='pr--dtls'>
        <h3 className='pr--dtls--h3'>{title}</h3>
        <p className='pr--dtls--p'>{quickInfo}</p>
        <button
          className='pr--btn btn'
          disabled={inCart ? true : false}
          onClick={() => addToBag(id)}
        >
          {inCart ? 'In Bag' : 'Add To Bag'}
        </button>
      </div>
    </div>
  );
}

export default Product;
