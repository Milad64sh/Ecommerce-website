function SmallCard() {
  return (
    <div className='sm-crd'>
      <div className='sm-crd--img'>
        <img src={require('../../assets/jpg/prdt-img/prd-1.jpg')} alt='' />
      </div>
      <div className='sm-crd--dtls'>
        <h3 className='sm-crd--dtls--h4'>name</h3>
        <p className='sm-crd--dt-p'>some details about product</p>
      </div>
    </div>
  );
}

export default SmallCard;
