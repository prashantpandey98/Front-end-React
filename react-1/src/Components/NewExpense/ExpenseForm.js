import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle]=useState('')
  const [enteredAmount, setEnteredAmount]=useState('')
  const [enteredDate, setEnteredDate]=useState('');
  // const [userInput, setUserInput]=useState({
  //   enteredTitle: '', enteredAmount : '', enteredDate: '' })

const titleChangeHandler=(event)=>{
  setEnteredTitle(event.target.value);
//   setUserInput((prevState)=>{
// return ({...prevState, enteredTitle:event.target.value});
//   })

};

const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value);
  // setUserInput((prevState)=>{
  //   return ({...prevState, enteredAmount:event.target.value});
  // })
};

const dateChangeHandler=(event)=>{
  setEnteredDate(event.target.value);
  // setUserInput((prevState)=>{
  //   return ({...prevState, enteredDate:event.target.value});
  // })
}

const submitHandler=(event)=>{
  event.preventDefault();
  const expenseData={
    title:enteredTitle,
    amount:enteredAmount,
    date: new Date(enteredDate)
  }
  console.log(expenseData);
}


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      <div className="new-expense__control">
      <label> Expense Title</label>
        <input type="text" onChange={titleChangeHandler} id="title" placeholder="Expense title"/>
      </div>
      <div>
      <label>Amount</label>
        <input
          type="number" onChange={amountChangeHandler} id="amount" placeholder="Expense Amount" min="0.01" step="0.01"/>
      </div>
      <div>
      <label>Date</label>
        <input type="date" onChange={dateChangeHandler} id="date" min="2019-01-01" max="2023-05-20"/>
      </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      </div>
      </form>

  );
};

export default ExpenseForm;
