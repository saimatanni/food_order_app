import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'Chicken/ Beef, peparoni, mashroom, cheese',
      price: 480,
    },
    {
      id: 'm2',
      name: 'Burger',
      description: 'Double cheese, Double petty, Naga-burger!',
      price: 160,
    },
    {
      id: 'm3',
      name: 'Pasta',
      description: 'Oven backed, chicken/beef, mashroom ',
      price: 220,
    },
    {
      id: 'm4',
      name: 'Steck',
      description: 'Healthy...and high protein...',
      price: 300,
    },
  ];

  const AvailabeMeals = () => {
      const mealslist = DUMMY_MEALS.map((meal)=>(
        <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price} 
     />
      ));
      
      return(
          <section className={classes.meals}>
            <Card>
              <ul>
                {mealslist}
              </ul>
            </Card>
             
          </section>
      );
  };
  export default AvailabeMeals;