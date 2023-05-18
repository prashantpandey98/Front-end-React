import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
const titleChangeHandler=(event)=>{
  console.log(event.target.value);
};


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
          type="number" id="amount" name="amount" placeholder="Expense Amount" min="0.01" step="0.01"/>
      </div>
      <div>
      <label>Date</label>
        <input type="date" id="date" name="date" min="2019-01-01" max="2023-05-20"/>
      </div>
      </div>
      <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      </div>
      </form>

  );
};

export default ExpenseForm;
