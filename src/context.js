import { createContext, useState, useEffect, setState } from 'react';
import { productsData, detailProduct } from './productsData';
const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [currInx, setCurrInx] = useState(0);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(true);
  const [modalProduct, setModalProduct] = useState(detailProduct);
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
  // ADD TO BAG
  const addToBag = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product]);
    console.log(product);
  };
  // OPEN MODAL
  const handleModal = (id) => {
    const product = getItem(id);
    setModal(!modal);
    setModalProduct(product);
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
        handleModal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
