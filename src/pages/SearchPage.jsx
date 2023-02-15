import { useContext } from 'react';
import SearchProduct from '../components/SearchProduct';
import ProductContext from '../context';

function SearchPage() {
  const { searchResults } = useContext(ProductContext);
  const results = searchResults.map((product) => (
    <SearchProduct key={product.id} product={product} />
  ));
  const content = results?.length ? results : <p>No Matching products</p>;
  return <main className='sch'>{content}</main>;
}

export default SearchPage;
