import classes from './Cart.module.css';
import Modal from '../UI/Modal';


const dishes=[{ id: 'c1', name: 'Biryani', amount: 2, price: 49.99 },{ id: 'c2', name: 'Halwa', amount: 3, price: 19.99 }]

const totalPrice= dishes.map(dish=>
    +(dish.price) + +dish.price
    );

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {dishes.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;