import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Women from './pages/Women.jsx';

import './styles/css/style.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
      </Routes>
    </Router>
  );
}

export default App;
