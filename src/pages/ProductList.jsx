import Product from '../components/Product';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import ProductContext from '../context';

function ProductList() {
  const { products, handleDetail } = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <div className='prs'>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <section className='sctn'>
        <div className='sctn-footer'>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default ProductList;
