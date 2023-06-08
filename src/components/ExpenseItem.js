import React from "react";
import "../style/ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <ExpenseItemDate />
      <div className="expense-item__description">Car Insurance</div>
      <div className="expense-item__price">$2390</div>
    </div>
  );
}
export default ExpenseItem;
