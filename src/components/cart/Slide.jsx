import { Link } from 'react-router-dom';

function Slide({ gift }) {
  const { img, title } = gift;

  return (
    <>
      <div className='sm-crd'>
        <Link to={'/detail'} className='sm-crd__btn'>
          <div className='sm-crd__btn--img'>
            <img src={img} alt='product' />
          </div>
        </Link>
        <div className='sm-crd--dtls'>
          <h3 className='sm-crd--dtls--h4'>{title}</h3>
          {/* <p className='sm-crd--dtls--p'>{quickInfo}</p> */}
          <button className='sm-crd--dtls--btn btn'>add to bag</button>
        </div>
      </div>
    </>
  );
}

export default Slide;
