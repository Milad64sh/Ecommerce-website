import { createContext, useState } from 'react';
import { productsData } from './productsData';
const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [currInx, setCurrInx] = useState(0);
  const [products, setProducts] = useState(productsData);
  const giftProducts = products.filter((product) => product.gift);

  const handleDetail = () => {
    console.log('hello from handle detail');
  };
  const addToBag = () => {
    console.log('hello from add to BAG');
  };
  const goToPrev = () => {
    const isFirstSld = currInx === 0;
    const newInx = isFirstSld ? giftProducts.lenght - 1 : currInx - 1;
    setCurrInx(newInx);
  };
  const goToNext = () => {
    const isLastSld = currInx === giftProducts.lenght - 1;
    const newInx = isLastSld ? 0 : currInx + 1;
    setCurrInx(newInx);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        currInx,
        giftProducts,
        goToPrev,
        goToNext,
        handleDetail,
        addToBag,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
