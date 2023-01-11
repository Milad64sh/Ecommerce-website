import { createContext, useState, useEffect } from 'react';
import { productsData, detailProduct } from './productsData';
const ProductContext = createContext();
export const ProductProvider = (props) => {
  const [currInx, setCurrInx] = useState(0);

  const [products, setProducts] = useState([]);
  const [bag, setBag] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [detailPrd, setDetailPrd] = useState(detailProduct);
  const [quickView, setQuickView] = useState(true);
  const [bagSubTotal, setBagSubTotal] = useState(0);
  const [bagTax, setBagTax] = useState(0);
  const [bagTotal, setBagTotal] = useState(0);
  const closeQuickView = () => {
    setQuickView(!quickView);
  };

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

  // OPEN MODAL
  const handleModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModal(!modal);
  };

  // INCREMENTATION
  const increment = (id) => {
    console.log('this is increment method');
  };
  // DECREMENTATION
  const decrement = (id) => {
    console.log('this is decrement method');
  };
  // REMOVE FROM BAG
  const removeItem = (id) => {
    console.log('this is remove method');
  };
  // CLEAR BAG
  const clearBag = () => {
    setBag([]);
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
    let subTotal = price;
    bag.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setProducts(tempProducts);
    setBag([...bag, product]);
    setBagSubTotal(subTotal);
    setBagTax(tax);
    setBagTotal(total);
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
        bag,
        products,
        detailPrd,
        currInx,
        giftProducts,
        saleProducts,
        modal,
        modalProduct,
        quickView,
        bagSubTotal,
        bagTax,
        bagTotal,
        goToPrev,
        goToNext,
        handleDetail,
        addToBag,
        // addTotals,
        setCurrInx,
        handleModal,
        closeQuickView,
        increment,
        decrement,
        removeItem,
        clearBag,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
