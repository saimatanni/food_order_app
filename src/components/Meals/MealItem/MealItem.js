import classes from './MealItem.module.css'
import MealItenFrom from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
const MealItem = props=>{

    const cartCtx= useContext(CartContext);

    const price =`${props.price.toFixed(2)}tk`; // ${} - is used for dynamic value

    const addToCArtHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        });
    };
    return(
        <>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItenFrom id= {props.id} onAddToCart={addToCArtHandler} />

            </div>
        </li>
        </>
    );
};
export default MealItem;

