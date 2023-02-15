import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer';
import { useContext } from 'react';
import ProductContext from '../../context';
import { Link } from 'react-router-dom';
import EmptyBag from './EmptyBag';
import BagList from './BagList';
function Bag() {
  const { bag, bagSubTotal, bagTax, bagTotal, bagSaved, clearBag } =
    useContext(ProductContext);

  return (
    <>
      <Navbar />
      <div className='bg'>
        <div className='bg__cnt'>
          <div className='bg--ttl'>
            <h2 className='bg--ttl--pg'>your bag</h2>
            <div className='bg--ttl--ttls'>
              <h3 className='bg--ttl--ttls--h3--itm'>item</h3>
              <h3 className='bg--ttl--ttls--h3'>price</h3>
              <h3 className='bg--ttl--ttls--h3'>quantity</h3>
              <h3 className='bg--ttl--ttls--h3'>total</h3>
            </div>
          </div>
          {bag.length > 0 ? <BagList /> : <EmptyBag />}
          <div className='bg--subInfo'>
            <div className='bg--subInfo--sbs'>
              <h3 className='bg--subInfo--ttls'>subtotal:</h3>
              <h3 className='bg--subInfo--prcs'>$&nbsp;{bagSubTotal}</h3>
            </div>
            <div className='bg--subInfo--sbs'>
              <h3 className='bg--subInfo--ttls'>tax:</h3>
              <h3 className='bg--subInfo--prcs'>$&nbsp;{bagTax}</h3>
            </div>
            <div className='bg--subInfo--sbs'>
              <h3 className='bg--subInfo--ttls'>saved:</h3>
              <h3 className='bg--subInfo--prcs'>$&nbsp;{bagSaved}</h3>
            </div>
            <div className='bg--subInfo--sbs'>
              <h3 className='bg--subInfo--ttls'>grand total:</h3>
              <h3 className='bg--subInfo--prcs--t'>
                $&nbsp;
                {parseFloat(bagTotal.toFixed(2))}
              </h3>
            </div>
          </div>
          <div className='bg--btns'>
            <Link to={'/products'} className='bg--btns--chLnk'>
              <button className='bg--btns--chBtn'>check out</button>
            </Link>
            <button
              className='bg--btns--chBtn'
              onClick={() => {
                clearBag();
              }}
            >
              clear bag
            </button>
          </div>
        </div>
      </div>

      <section className='sctn'>
        <div className='sctn-footer'>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Bag;
