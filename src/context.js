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
  const [bagSubTotal, setBagSubTotal] = useState([]);
  const [bagTax, setBagTax] = useState(0);
  const [bagTotal, setBagTotal] = useState(0);
  const [bagSaved, setBagSaved] = useState(0);

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
  // ADD TO BAG

  const addToBag = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    if (product.sale) {
      const price = product.discountPrice;
      product.total = price;
      let discount = product.price - product.discountPrice;
      product.discount = discount;
      let subTotal = price;
      bag.map((item) => {
        subTotal += item.total;
        discount += item.discount;
      });
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));

      // let saved = [discount];
      const addSaved = bag.map((item) => {
        let saved = [];
        if (item.sale) {
          const save = item.price - item.dicount;
          saved.push(save);
        } else {
          saved.push(0);
        }
        console.log(saved);
      });

      const total = subTotal + tax;
      setProducts(tempProducts);
      setBag([...bag, product]);
      setBagSubTotal(subTotal);
      setBagTax(tax);
      setBagTotal(total);
      // setBagSaved(bagAddSaved);
    } else {
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
    }
  };

  // INCREMENTATION
  const increment = (id) => {
    let tempBag = [...bag];
    const selectedProduct = tempBag.find((item) => item.id === id);
    const index = tempBag.indexOf(selectedProduct);
    const product = tempBag[index];
    product.count = product.count + 1;
    if (product.sale) {
      product.total = product.count * product.discountPrice;
    } else {
      product.total = product.count * product.price;
    }
    const productSaved = bag.map(
      (item) => item.count * item.price - item.count * item.discountPrice
    );
    const allBagSaved = productSaved.reduce((sum, num) => sum + num);
    setBagSaved(allBagSaved);
    const allTotal = bag.map((item) => item.total);
    const subFinalTotal = allTotal.reduce((sum, num) => sum + num);
    console.log(allTotal);
    const tempTax = subFinalTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const finalTotal = subFinalTotal + tax;
    setBagTotal(finalTotal);
    setBagSubTotal(subFinalTotal);
    setBagTax(tax);
    setBag([...tempBag]);
  };
  // DECREMENTATION
  const decrement = (id) => {
    console.log('this is decrement method');
  };
  // REMOVE FROM BAG
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempBag = [...bag];
    tempBag = bag.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    setBag([...tempBag]);
    setProducts([...tempProducts]);
  };
  // CLEAR BAG
  const clearBag = () => {
    setBag([]);
    setBagSubTotal(0);
    setBagTax(0);
    setBagTotal(0);
    setBagSaved(0);
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
        bagSaved,
        goToPrev,
        goToNext,
        handleDetail,
        addToBag,
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
