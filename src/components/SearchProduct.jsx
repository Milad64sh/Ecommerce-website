import { useContext } from 'react';
import ProductContext from '../context';

function SearchProduct(props) {
  const { id, img, sale, title, price, discountPrice, company, productType } =
    props.product;
  return (
    <main className='schPrd'>
      <section className='schPrd__img'>
        <img src={img} alt={title} />
      </section>
      <section className='schPrd__info'>
        <div className='schPrd__info--ttl'>{title}</div>
        <div className='schPrd__info--typ'>{productType}</div>
        <div className='schPrd__info--com'>{company}</div>
        <div className='schPrd__info--prc'>
          <span
            className={sale ? 'schPrd__info--prc-crossed' : 'schPrd__info--prc'}
          >
            ${price}
          </span>
          <span
            className={
              sale ? 'schPrd__info--prc-show' : 'schPrd__info--prc-notShow'
            }
          >
            ${discountPrice}
          </span>
        </div>
      </section>
    </main>
  );
}

export default SearchProduct;
