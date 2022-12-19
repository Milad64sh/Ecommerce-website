import { Link } from 'react-router-dom';

function Sale() {
  return (
    <div className='sale'>
      <div className='sale--img'>
        <img
          src={require('../assets/jpg/prdt-img/sunc cream-La Roche-Posay.png')}
          alt=''
        />
      </div>
      <div className='sale--cnt'>
        <div className='sale--hdngs'>
          <h2 className='sale--hdngs h2'>Anthelios</h2>
          <h3 className='sale--hdngs h3'>
            Invisible fragrance-free 50ml pocket-size liquid sun cream from
            Anthelios La Roche Posay.
          </h3>
        </div>
      </div>
      <div className='sale--btns'>
        <button className='sale-btn btn'>
          <Link to={'/detail'} className='sale--lnk'>
            details
          </Link>
        </button>
        <span className='bf'></span>
        <button className='sale-btn btn'>add to bag</button>
      </div>
    </div>
  );
}

export default Sale;
