import { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';
function Product(props) {
  const {
    bag,
    handleDetail,
    addToBag,
    handleModal,
    closeQuickView,
    quickView,
  } = useContext(ProductContext);
  const { id, title, quickInfo, img, inCart } = props.product;

  return (
    <div className='pr'>
      {quickView && (
        <button
          className='pr--qckBtn'
          onClick={() => {
            closeQuickView();
            handleModal(id);
          }}
        >
          quick view
        </button>
      )}

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
          disabled={inCart && bag.length > 0 ? true : false}
          onClick={() => {
            addToBag(id);
          }}
        >
          {inCart && bag.length > 0 ? 'In Bag' : 'Add To Bag'}
        </button>
      </div>
    </div>
  );
}

export default Product;
