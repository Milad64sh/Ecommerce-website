import { useContext } from 'react';
import ProductContext from '../context';
import { Link } from 'react-router-dom';

function Modal() {
  const {
    bag,
    handleDetail,
    handleModal,
    addToBag,
    closeQuickView,
    modal,
    modalProduct,
  } = useContext(ProductContext);
  const { id, img, title, price, sale, discountPrice, inCart } = modalProduct;
  if (!modal) {
    return null;
  } else {
    return (
      <>
        <div className='mdlCnt'>
          <div className='mdlCnt--mdl'>
            <button
              className='mdlCnt--mdl--cls'
              onClick={() => {
                closeQuickView();
                handleModal(id);
              }}
            >
              X
            </button>
            <h2 className='mdlCnt--mdl--h2'>{title}</h2>
            <img src={img} alt='product' className='mdlCnt--mdl--img' />
            <div className='mdlCnt--mdl--prc'>
              {sale ? (
                <h3 className='mdlCnt--mdl--prc--prc-crossed'>${price}</h3>
              ) : (
                <h3 className='mdlCnt--mdl--prc--prc'>${price}</h3>
              )}
              {sale ? (
                <h3 className='mdlCnt--mdl--prc--dscPrc'>${discountPrice}</h3>
              ) : (
                ''
              )}
            </div>
            <div className='mdlCnt--mdl--btns'>
              <button
                className='mdlCnt--mdl--btns--btn'
                disabled={inCart && bag.length > 0 ? true : false}
                onClick={() => addToBag(id)}
              >
                {inCart && bag.length > 0 ? 'in bag' : 'add to bag'}
              </button>
              <button className='mdlCnt--mdl--btns--lbtn'>
                <Link
                  to={'/detail'}
                  className='mdlCnt--mdl--btns--lbtn--lnk'
                  onClick={() => {
                    handleDetail(id);
                    handleModal(id);
                  }}
                >
                  detail
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
