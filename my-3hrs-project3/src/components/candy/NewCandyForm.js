import React,{useState} from 'react'
import classes from "./NewCandyForm.module.css"


const NewCandyForm = (props) => {
        const [candyName, setCandyName]=useState("");
        const [candyDesc, setCandyDesc]=useState("");
        const [candyPrice, setCandyPrice]=useState("");

        const filledInputs= candyName!=="" && candyDesc!=="" && candyPrice!=="" ;

        const nameChangeHandler=(e)=>{
            setCandyName(e.target.value)
            
        }
        const descChangeHandler=(e)=>{
            setCandyDesc(e.target.value)
        }
        const priceChangeHandler=(e)=>{
            setCandyPrice(e.target.value)
        }

    const submitHandler=(e)=>{
        const newData={
            id: `candy${Math.floor(Math.random()*1000000)+ 1}`,
            name:candyName,
            desc:candyDesc,
            price: +candyPrice
        }
        props.onAddNewCandy(newData);
        setCandyName("");
        setCandyDesc("");
        setCandyPrice("");
    }

  return (
    <div className={classes.inputForm}>
    <label htmlFor='name'>Candy Name: </label>
    <input
        type="text"
        id="name"
        placeholder="Name"
        value={candyName}
        onChange={nameChangeHandler}
      
    />
    <label htmlFor='desc'>Candy Description: </label>
    <input 
        id="desc"
        type="text"
        placeholder="Description"
        value={candyDesc}
        onChange={descChangeHandler}
    />
    <label htmlFor='price'>Price: </label>
    <input 
        id="price"
        type="number"
        placeholder="Price"
        value={candyPrice}
        onChange={priceChangeHandler}
    />
    {filledInputs && <button className={classes.btn} onClick={submitHandler}>Add to List</button>}
    </div>
  )
}

export default NewCandyForm;