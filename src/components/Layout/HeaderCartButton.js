// import React from "react";
// import CartIcon from "../Cart/CartIcon";
// import classes from './HeaderCartButton.module.css';
// import CartContext from "../../store/cart-context";
// import { useContext } from "react";

// const HeaderCartButton = (props) =>{
// const cartCtx= useContext(CartContext);

// // Carried a number for next execution
// const numberOfCartItem = cartCtx.items.reduce((curNumber, item)=>{
//     return curNumber + item.amount;
// }, 0);

//     return(
//         <button className={classes.button} onClick={props.onClickButton}>
//             <snap className={classes.icon}>
//                 <CartIcon/>
//             </snap>
//             <snap> your Cart</snap>
//             <snap className={classes.badge}> {numberOfCartItem} </snap>
//         </button>
//     );
// };
// export default HeaderCartButton;

import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx && cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  

  return (
    <button className={classes.button} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;