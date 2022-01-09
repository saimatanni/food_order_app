import logo from './logo.svg';
import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';

function App() {
  const [ cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler =()=>{
     setCartIsShown(true);
  }

  const hideCartHandler =()=>{
    setCartIsShown(false);
 }
  return (
    // CartProvider a wrapping component
    <CartProvider>
      {/*  Dinamically render cart if it is true, not render if it is false */}
     { cartIsShown && <Cart onClose={hideCartHandler}/>} 
     {/* <Cart/> */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
     
    </CartProvider>
  );
}

export default App;

