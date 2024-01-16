import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context';
import { UserAuthProvider } from './userAuthcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <UserAuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserAuthProvider>
  </ProductProvider>
);

reportWebVitals();
