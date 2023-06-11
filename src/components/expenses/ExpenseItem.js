import React from "react";
import { useState } from "react";
import "../../style/expenses/ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
