import React,{useState} from 'react';
import CartProvider from './store/CartProvider';
import Navbar from './components/header/Navbar';
import Cart from './components/cart/Cart';
import Availablecandy from './components/candy/AvailableCandy';

function App() {
  const[showCart, setShowCart]= useState(false);

  const showCartHandler=()=>{
    setShowCart(true);
  }
  const closeCartHandler=()=>{
    setShowCart(false);
  }
  return (
   <CartProvider>
   <Navbar onShowCart={showCartHandler}/>
   {showCart && <Cart onClose={closeCartHandler}/>}
   <main>
   <Availablecandy/>
   </main>
   </CartProvider>
  );
}

export default App;
