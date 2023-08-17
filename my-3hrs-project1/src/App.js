import { useState } from 'react';
import './App.css';
import Form from './Components/form/Form';
import ItemList from './Components/form/ItemList';
import Card from './Components/UI/Card';

function App() {

  const [itemList, setItemList]= useState([]);

  const addProductHandler = (item)=>{
    setItemList([...itemList, item]);
    localStorage.setItem(item.id, JSON.stringify(item));
  }

  const deleteProductHandler=(itemId)=>{
    let newProductList= itemList.filter(ele=> ele.id !==itemId);
    setItemList([...newProductList]);  
  }

  return (
    <Card>
     <Form onAddProduct={addProductHandler}/>
     <ItemList items={itemList} onDeleteProduct={deleteProductHandler}/>
    </Card>
  );
}

export default App;
