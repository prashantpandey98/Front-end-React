import React,{ useEffect, useReducer} from 'react'
import CartContext   from './cart-context';
import axios from 'axios';


const init_value={
  items:[],
  totalPrice:0,
  totalQuantity:0
}
const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedtotalPrice = state.totalPrice + action.item.price * action.item.quantity;
    const updatedtotalQuantity = state.totalQuantity - action.item.quantity;
    const existingCartItemIndex= state.items.findIndex((item)=> item.id === action.item.id);
    const existingCartItem= state.items[existingCartItemIndex];

    let updatedItems;
    if(existingCartItem){
      const updatedItem={
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity
      }
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex]= updatedItem;
    } else {
      updatedItems= state.items.concat(action.item);
     }
     console.log(state);
    return {
      items: updatedItems,
      totalPrice: updatedtotalPrice,
      totalQuantity: updatedtotalQuantity
    };
    
  }

  if(action.type==="REMOVE"){
    const existingCartItemIndex= state.items.findIndex((item)=> item.id === action.id);
    const exisitingItem= state.items[existingCartItemIndex]
    const updatedtotalQuantity= state.totalQuantity+1;
    const updatedtotalPrice= state.totalPrice - exisitingItem.price;
    let updatedItems;
    if(exisitingItem.quantity===1){
      updatedItems= state.items.filter(item=>item.id !== action.id);
    } else {
      let updatedItem={...exisitingItem, quantity: exisitingItem.quantity-1};
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]= updatedItem;
    }
    return {
      items : updatedItems,
      totalPrice: updatedtotalPrice,
      totalQuantity:updatedtotalQuantity
    }
  }
  
  return init_value;
};

const CartProvider = (props) => {
  const [myState, dispatcher]= useReducer(reducer, init_value);

  const addMedsToCart=async (item)=>{
    dispatcher({type:"ADD", item:item})
    const response= await axios.post(`https://crudcrud.com/api/c985eac801594a9c829a197d80662a37/cart/`, item)
    console.log(response.data);
  }
  const removeMedsFromCart=(id, crudId)=>{
    dispatcher({type:"REMOVE", id:id, crudId: crudId})
    if(myState.items.length===0){
      axios.delete(`https://crudcrud.com/api/c985eac801594a9c829a197d80662a37/cart/`)
    }
  }
  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const res= await axios.get(`https://crudcrud.com/api/c985eac801594a9c829a197d80662a37/cart/`);
        res.data.map((item)=>{
          myState.items.push(item);
        })
        console.log(res.data);
      }catch(err){
        alert("Failed to fetch on reload - " + err)
      }
    }
    fetchItems();
  },[])
  const data={
    items: myState.items,
    totalPrice: myState.totalPrice,
    totalQuantity: myState.totalQuantity,
    addMeds: addMedsToCart,
    removeMeds:removeMedsFromCart
  }

  return (
    <div>
    <CartContext.Provider value={data}>
    {props.children}
    </CartContext.Provider>
    </div>
  )
}
export default CartProvider;
