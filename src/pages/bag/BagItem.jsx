import { useContext } from 'react';
import ProductContext from '../../context';
function BagItem({ item }) {
  const { increment, decrement, removeItem } = useContext(ProductContext);
  const { id, img, title, price, total, company, productType, count } = item;
  return (
    <>
      <div className='bg--itm'>
        <div className='bg--itm--btnUp'>
          <button
            className='bg--itm--btnUp--clsBtnUp'
            onClick={() => removeItem(id)}
          >
            X
          </button>
        </div>
        <div className='bg--itm--imgT'>
          <div className='bg--itm--imgT--img'>
            <img src={img} alt='product' />
          </div>
          <div className='bg--itm--imgT--info'>
            <h3 className='bg--itm--imgT--info--t'>{title}</h3>
            <h3 className='bg--itm--imgT--info--c'>{company}</h3>
            <h3 className='bg--itm--imgT--info--p'>{productType}</h3>
          </div>
        </div>
        <div className='bg--itm--prc'>$&nbsp;{price}</div>
        <div className='bg--itm--qnt'>
          <button
            className='bg--itm--qnt--btn'
            disabled={count === 0 ? true : false}
            onClick={() => decrement(id)}
          >
            -
          </button>
          <span className='bg--itm--qnt--n'>{count}</span>
          <button className='bg--itm--qnt--btn' onClick={() => increment(id)}>
            +
          </button>
        </div>
        <div className='bg--itm--tot'>
          $&nbsp;{parseFloat(total.toFixed(2))}
        </div>
        <div className='bg--itm--btn'>
          <button
            className='bg--itm--btn--clsBtn'
            onClick={() => removeItem(id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default BagItem;
