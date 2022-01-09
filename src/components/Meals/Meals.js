import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from 'react';
const meals =()=>{
    return(
        <Fragment>
            
            <MealsSummary />
            <AvailableMeals />
           
        </Fragment>
    )

}
export default meals;