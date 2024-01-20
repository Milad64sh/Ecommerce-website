import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import ProductContext from '../context';

const Hero = () => {
  const { products, setSearchResults, searchResults } =
    useContext(ProductContext);
  const interBubbleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // HANDLE SEARCH BAR
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(products);
    const resultsArray = products.filter(
      (product) =>
        product.title.includes(e.target.value) ||
        product.company.includes(e.target.value) ||
        product.productType.includes(e.target.value)
    );
    console.log(resultsArray);
    console.log(searchResults);
    setSearchResults(resultsArray);
  };

  // HANDLE MOTION GRADIENT BACKGROUND
  useEffect(() => {
    // Function to move the interactive bubble
    const move = () => {
      if (interBubbleRef.current) {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubbleRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      }
    };

    // Initial values
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Event listener for mousemove
    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    // Attach mousemove event listener when component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation loop
    move();

    // Clean up event listener and animation loop when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className='hro'>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='10'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                result='goo'
              />
              <feBlend in='SourceGraphic' in2='goo' />
            </filter>
          </defs>
        </svg>
        <div className='hro__gradients-container'>
          <div className='hro__gradients-container--g1'></div>
          <div className='hro__gradients-container--g2'></div>
          <div className='hro__gradients-container--g3'></div>
          <div className='hro__gradients-container--g4'></div>
          <div className='hro__gradients-container--g5'></div>
          <div
            ref={interBubbleRef}
            className='hro__gradients-container--interactive'
          ></div>
        </div>
        <div className='hro__content'>
          <h1 className='hro__content--hdng'>
            ready for <span className='hro__content--hdng--span'>50%</span>off?
          </h1>
          <Link to={'/products'} className='hro__content--btn'>
            all products
          </Link>
          <div className='hro__content__search'>
            <form className='hro__content__search__frm' onSubmit={handleSubmit}>
              <input
                type='text'
                className='hro__content__search__frm--ipt'
                placeholder='Search products'
                id='search'
                onChange={handleSearchChange}
              />
              <span className='hro__content__search__frm--icn'>
                <CiSearch />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
