import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from './../UI/Card';

const My_Menu = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'Tasty spicy best Biryani',
    price: 299.99,
  },
  {
    id: 'm2',
    name: 'Dal Makhni',
    description: 'A yummy and healthy experience!',
    price: 249.99,
  },
  {
    id: 'm3',
    name: 'Shahi Paneer',
    description: 'Best Indian cuisine!!',
    price: 499.99,
  },
  {
    id: 'm4',
    name: 'Veggie Salad',
    description: 'Keep it simple and healty...',
    price: 200.00,
  },
];

const AvailableMeals = () => {
  const mealsList = My_Menu.map((meal) =>(
    <MealItem key={meal.id}
    name={meal.name} id={meal.id} description={meal.description} price={meal.price} /> 
  ));

  return (
    <section className={classes.meals}>
    <Card>
    <ul>{mealsList}</ul>
    </Card>  
    </section>
  );
};

export default AvailableMeals;