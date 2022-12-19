import { createContext, useState } from 'react';
import { productsData } from './productsData';
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([productsData]);

  const handleDetail = () => {
    console.log('hello from handle detail');
  };
  const addToBag = () => {
    console.log('hello from add to BAG');
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        handleDetail,
        addToBag,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContext;