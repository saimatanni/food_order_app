import React from 'react';


const CartContext= React.createContext({
    items:[0],
    iotalAmout: 0,
    addItem: (item) =>{},
    // revomItem: (id)={}
});

export default CartContext;