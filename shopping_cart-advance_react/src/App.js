import { useEffect, } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/uiSlice';
import Notification from './components/UI/Notification'

let isInitial=true;

function App() {
  const showCart= useSelector((state)=> state.ui.cartIsVisible)
  const cart = useSelector((state)=> state.cart);
  const dispatch= useDispatch();
  const notification= useSelector((state)=> state.ui.notification);

 

  useEffect(()=>{
    const sendCartData=async()=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Sending...',
        message:'Sending cart Data.'
      }))
     const response= await fetch("https://react-movieapp-demo-default-rtdb.firebaseio.com/cart.json",{
        method: "PUT",
        body: JSON.stringify(cart)
      })
      if(!response.ok){
        throw new Error("Sending Cart Data Failed..")
      }
      dispatch(uiActions.showNotification({
        status:'success',
        title:'Success!!',
        message:'Sent cart data successfully..'
      }))
    }
    if(isInitial){   //So that the useEffect does run on first render. Blocks the code below from executing on the first render
      isInitial=false;
      return;
    }

   sendCartData().catch((error)=>{
    dispatch(uiActions.showNotification({
      status:'error',
      title:'Error...',
      message:'Sending cart data failed'
    }))
   })
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
