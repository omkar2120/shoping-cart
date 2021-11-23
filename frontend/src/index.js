import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore, } from "@reduxjs/toolkit";
import { Provider } from "react-redux"
import productReducer, { productsFetch } from './features/productSlice';
import { productsApi } from './features/productsApi';
import cartSlice, { cartReducer } from "./features/cartSlice" 

const store = configureStore({
  reducer: {
    products: productReducer,
    cart:cartSlice,

    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware().concat(productsApi.middleware),
  
});

store.dispatch(productsFetch());

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
