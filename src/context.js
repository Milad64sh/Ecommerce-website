import { createContext, useState, useEffect, setState } from 'react';
import { productsData, detailProduct } from './productsData';
const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [currInx, setCurrInx] = useState(0);

  const [products, setProducts] = useState([]);
  const [detailPrd, setDetailPrd] = useState(detailProduct);

  useEffect(() => {
    let tempProducts = [];
    productsData.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    setProducts(tempProducts);
  }, []);
  const giftProducts = products.filter((product) => product.gift);
  const saleProducts = products.filter((product) => product.sale);

  // GET ITEM ID
  const getItem = (id) => {
    const product = products.find((item) => item.id === id);

    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailPrd(product);
  };
  const addToBag = (id) => {
    console.log(`add item with id:${id} to bag`);
  };

  const goToNext = () => {
    const isLastSld = currInx === giftProducts.length - 1;
    const newInx = isLastSld ? 0 : currInx + 1;
    setCurrInx(newInx);
  };
  const goToPrev = () => {
    const isFirstSld = currInx === 0;
    const newInx = isFirstSld ? giftProducts.length - 1 : currInx - 1;
    setCurrInx(newInx);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        detailPrd,
        currInx,
        giftProducts,
        saleProducts,
        goToPrev,
        goToNext,
        handleDetail,
        addToBag,
        setCurrInx,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
