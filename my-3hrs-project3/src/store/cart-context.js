import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addCandy: (item) => {},
  removeCandy: (id) => {}
});

export default CartContext;