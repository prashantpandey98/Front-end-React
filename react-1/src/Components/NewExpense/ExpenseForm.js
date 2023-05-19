import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle]=useState('')
  const [enteredAmount, setEnteredAmount]=useState('')
  const [enteredDate, setEnteredDate]=useState('');

const titleChangeHandler=(event)=>{
  setEnteredTitle(event.target.value);
};

const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value);
};

const dateChangeHandler=(event)=>{
  setEnteredDate(event.target.value);
}


  return (
    <form>
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
