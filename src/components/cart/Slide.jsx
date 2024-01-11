import { Link } from 'react-router-dom';

function Slide({ gift, currIdx, index }) {
  const { img, title } = gift;

  return (
    <>
      <div
        className={`sm-crd ${currIdx === index + 1 ? 'next' : ''} ${
          currIdx === index - 1 ? 'prev' : ''
        }`}
      >
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
