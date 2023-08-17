import { useEffect, } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData,fetchCartData } from './store/cart-actions';
import Notification from './components/UI/Notification'

let isInitial=true;

function App() {
  const showCart= useSelector((state)=> state.ui.cartIsVisible)
  const cart = useSelector((state)=> state.cart);
  const dispatch= useDispatch();
  const notification= useSelector((state)=> state.ui.notification);

 
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(()=>{
   
    if(isInitial){   //So that the useEffect does run on first render. Blocks the code below from executing on the first render
      isInitial=false;
      return;
    }
    if(cart.changed===true){
      dispatch(sendCartData(cart));
    }

  },[cart, dispatch])

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
    {showCart && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
