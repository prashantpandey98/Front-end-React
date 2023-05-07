import ExpenseDetails from "./ExpenseDetails"
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
    <div><ExpenseDate date={props.date}/></div>
    <div><ExpenseDetails title={props.title} location={props.location} amount={props.amount}/></div>
    </div>
  )
}

export default ExpenseItem;