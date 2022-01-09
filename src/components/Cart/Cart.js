import classes from './Cart.module.css';
// import CartIcon from './CartIcon';
import React from 'react';
import Modal from '../UI/Modal';

const Cart =(props)=>{
    const cartItem =(
        <ul className={classes['cart-items']}>
            {[{id: 'c1',
            name:'Pizza',
            amount: '2',
            price: '500 TK'}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );
  return(
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>500</span>
        
      </div >
      <div className={classes.actions}></div>
      <button className={classes['button--alt']} onClick={props.onClose}  >Close</button>
      <button className={classes.button}>Order</button>

   </Modal>
  );
  
   
};
export default Cart;