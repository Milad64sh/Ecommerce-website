import { Link } from 'react-router-dom';

function Sale(props) {
  const { img, title, quickInfo, id, sale, price, discountPrice } =
    props.product;
  return (
    <div className='sale'>
      <Link to={`/detail/${id}`} className='sale--lnk'>
        <div className='sale--img'>
          <img src={img} alt='product' />
        </div>
      </Link>
      <div className='sale__cnt'>
        <div className='sale--hdngs'>
          <h2 className='sale--hdngs h2'>{title}</h2>
          <h3 className='sale--hdngs h3'>{quickInfo}</h3>
          <h3 className='sale__cnt--h3'>
            price:&nbsp; &nbsp;
            <span
              className={sale ? 'sale__cnt--prc-crossed' : 'sale__cnt--prc'}
            >
              ${price}
            </span>
            <span
              className={
                sale ? 'sale__cnt--prc-show' : 'sale__cnt--prc-notShow'
              }
            >
              ${discountPrice}
            </span>
          </h3>
        </div>
      </div>

      {/* <div className='sale--btns'>
        <span className='bf'></span>
        <button className='sale-btn btn'>add to bag</button>
      </div> */}
    </div>
  );
}

export default Sale;
