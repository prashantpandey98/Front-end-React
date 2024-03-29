import React,{useState,useContext} from 'react'
import classes from "./NewMedsForm.module.css"
import { MyContext } from '../store/ProductContext'


const NewMedsForm = (props) => {
    const myCtx= useContext(MyContext);
        const [medName, setMedName]=useState("");
        const [medDesc, setMedDesc]=useState("");
        const [medPrice, setMedPrice]=useState("");
        const [medQuantity, setMedQuantity]= useState("");

        const filledInputs= medName!=="" && medDesc!=="" && medPrice!=="" && medQuantity!=="";

        const nameChangeHandler=(e)=>{
            setMedName(e.target.value)
            
        }
        const descChangeHandler=(e)=>{
            setMedDesc(e.target.value)
        }
        const priceChangeHandler=(e)=>{
            setMedPrice(e.target.value)
        }
        const quantityChangeHandler=(e)=>{
            setMedQuantity(e.target.value)
        }
    const submitHandler=(e)=>{
        const newData={
            id: `med${Math.floor(Math.random()*1000000)+ 1}`,
            name:medName,
            desc:medDesc,
            price: +medPrice,
            totalQuantity:medQuantity
        }
        myCtx.addMedsHandler(newData);
        setMedName("");
        setMedDesc("");
        setMedPrice("");
        setMedQuantity("");
    }

  return (
    <div className={classes.inputForm}>
    <label htmlFor='name'>Medicine Name: </label>
    <input
        type="text"
        id="name"
        placeholder="Name"
        value={medName}
        onChange={nameChangeHandler}
      
    />
    <label htmlFor='desc'>Medicine Description: </label>
    <input 
        id="desc"
        type="text"
        placeholder="Description"
        value={medDesc}
        onChange={descChangeHandler}
    />
    <label htmlFor='price'>Price: </label>
    <input 
        id="price"
        type="number"
        placeholder="Price"
        value={medPrice}
        onChange={priceChangeHandler}
    />
    <label htmlFor='price'>Total Quantity: </label>
    <input 
        id="quantity"
        type="number"
        placeholder="Quantity"
        value={medQuantity}
        onChange={quantityChangeHandler}
    />
    {filledInputs && <button className={classes.btn} onClick={submitHandler}>Add to List</button>}
    </div>
  )
}

export default NewMedsForm