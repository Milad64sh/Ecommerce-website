import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import Bag from './pages/Bag.jsx';
import Detail from './pages/Detail.jsx';
import Default from './pages/Default.jsx';

import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Women from './pages/Women.jsx';

import './styles/css/style.css';
import Modal from './components/Modal.jsx';
function App() {
  return (
    <Router>
      <Modal />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product' element={<Product />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/women' element={<Women />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/default' element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
