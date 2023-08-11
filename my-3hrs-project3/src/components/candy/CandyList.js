import React, { useContext } from 'react'
import classes from "./CandyList.module.css";
import CartContext from '../../store/cart-context';
import CandyForm from './CandyForm';


 const CandyList = (props) => {
    
const myData = useContext(CartContext);

const price= `Rs. ${props.price.toFixed(2)}`;

const addToCartHandler=(quantity)=>{

myData.addCandy({ 
    id:props.id,
    name:props.name,
    price:props.price,
    quantity:quantity
})
}

  return (
    <li className={classes.candies}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <CandyForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}
export default CandyList;
