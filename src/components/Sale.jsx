import { Link } from 'react-router-dom';

function Sale(props) {
  const { img, title, quickInfo, id } = props.product;
  return (
    <div className='sale'>
      <div className='sale--img'>
        <img src={img} alt='product' />
      </div>
      <div className='sale--cnt'>
        <div className='sale--hdngs'>
          <h2 className='sale--hdngs h2'>{title}</h2>
          <h3 className='sale--hdngs h3'>{quickInfo}</h3>
        </div>
      </div>
      <div className='sale--btns'>
        <Link to={`/detail/${id}`} className='sale--lnk'>
          <button className='sale-btn btn'>details</button>
        </Link>
        <span className='bf'></span>
        <button className='sale-btn btn'>add to bag</button>
      </div>
    </div>
  );
}

export default Sale;
