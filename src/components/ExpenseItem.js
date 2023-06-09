import React from "react";
import { useState } from "react";
import "../style/ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem(props) {
  let update = props.title;
  const clickHandler = () => {
    update = "updated";
  };
  return (
    <div className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">{update}</div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>click here</button>
    </div>
  );
}
export default ExpenseItem;
