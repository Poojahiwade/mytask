import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './redux/ProductSlice';

let store = configureStore({
  reducer : ProductSlice
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>
  
);

