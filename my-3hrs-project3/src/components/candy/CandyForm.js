import React,{useRef, useState} from 'react'
import Input from "../../UI/Input"
import classes from './CandyForm.module.css';

const CandyForm = (props) => {
    const [quantityValid, setQuantityValid]= useState(true)

    const quantityInputRef= useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        const candyQuantity= quantityInputRef.current.value;
        const candyQuantityNum= +(candyQuantity);
        if(candyQuantity.trim().length===0 ||candyQuantityNum<1 || candyQuantityNum>10 ){
            setQuantityValid(false);
        }
        props.onAddToCart(candyQuantityNum)
    }

    const onClickHandler=(e,id)=>{
      e.stopPropagation()
      props.onDelete(id);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={quantityInputRef}
        label='Quantity'
        input={{
          id: 'quantity' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className={classes.addBtn}>+ Add candy</button>
       <button className={classes.deleteBtn} onClick={onClickHandler}>Delete candy</button>
      {!quantityValid && <p><b>Please Enter a Valid Quantity of Medicine (1-10). </b></p>}
    </form>
  )
}
export default CandyForm;






