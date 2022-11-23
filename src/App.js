
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Pages/Footer/Footer';
import MyHeader from './Pages/Header/MyHeader';
import Home from './Pages/HomePage/Home/Home';
import Cart from './Pages/HomePage/Products/Cart';
import Checkout from './Pages/HomePage/Products/Checkout/Checkout';
import Products from './Pages/HomePage/Products/Products';

import ProductsList from './Pages/HomePage/Products/ProductsList';
import ProductView from './Pages/HomePage/Products/ProductView/ProductView';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';
import ShopCart from './Pages/ShopCart/ShopCart';

function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <MyHeader></MyHeader>
     <ShopCart></ShopCart>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route
        path="/list"
        element={
          <PrivateRoute>
            <List/>
          </PrivateRoute>
        }
      />
        <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        }
      />
      <Route path="view">
        <Route path=":userId" element={<ProductView />} />
      </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/cart" element={<Products/>}/>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
