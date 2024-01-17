import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import Bag from './pages/bag/Bag.jsx';
import Detail from './pages/Detail.jsx';
import Default from './pages/Default.jsx';
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import Women from './pages/Women.jsx';
import './styles/css/style.css';
import Modal from './components/Modal.jsx';
import Auth from './pages/Auth.jsx';
import SignUp from './pages/SignUp.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App() {
  return (
    <Router>
      <Modal />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product' element={<Product />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/women' element={<Women />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/detail/:productId' element={<Detail />} />
        <Route path='/default' element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
