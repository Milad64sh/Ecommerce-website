import { Link } from 'react-router-dom';

function Slide(props) {
  const { img, quickInfo, title } = props.gift;

  return (
    <>
      <div className='sm-crd'>
        <Link to={'/detail'} className='sm-crd--btn'>
          <button className='sm-crd--btn--d'>details</button>
        </Link>
        <div className='sm-crd--img'>
          <img src={img} alt='product' />
        </div>
        <div className='sm-crd--dtls'>
          <h3 className='sm-crd--dtls--h4'>{title}</h3>
          <p className='sm-crd--dtls--p'>{quickInfo}</p>
          <button className='btn'>add to bag</button>
        </div>
      </div>
    </>
  );
}

export default Slide;
