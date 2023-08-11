import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  totalQuantity:0,
  addMeds: (item) => {},
  removeMeds: (id) => {}
});

export default CartContext;