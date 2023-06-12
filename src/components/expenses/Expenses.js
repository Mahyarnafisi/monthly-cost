import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../style/expenses/Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map((item) => (
        <ExpenseItem title={item.title} date={item.date} amount={item.amount} />
      ))}
    </div>
  );
}

export default Expenses;
