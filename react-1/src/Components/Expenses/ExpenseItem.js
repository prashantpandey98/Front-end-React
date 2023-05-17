import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle]=useState(props.title);
  const [amount, setAmount]=useState(props.amount);

const clickHandler=()=>{
  setTitle("Upated");
  console.log(title);
}
const updateAmount=()=>{
  setAmount(amount+100);
  console.log(amount);
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button
        onClick={clickHandler}>Change Title</button>
        <button
        onClick={updateAmount}>Add Amount</button>
    </Card>
  );
};

export default ExpenseItem;
