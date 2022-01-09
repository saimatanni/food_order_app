import CartContext from "./cart-context"
import { useReducer } from "react";

const removeItemToCArtHandler = id => {};

const defaultCartState={
    items:[],
    totalAmount:0
}

const addItemToCArtHandler = id => {};
const cartReducer =(state, action)=>{
    if(action.type==='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =  state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}


const CartProvider = (props)=>{
    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState)
    const addItemToCArtHandler=(item)=>{
        dispatchCartAction({type:'ADD', item:item});
    };

    const removeItemToCArtHandler=(id)=>{
        dispatchCartAction({type:'remove', id:id});
    };

    const cartContext ={
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCArtHandler,
        removeItem: removeItemToCArtHandler,
    };
    return(
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;