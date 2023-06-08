import React from "react";
import "../style/ExpenseItemDate.css";
import { MdCalendarToday } from "react-icons/md";

function ExpenseItemDate() {
  return (
    <div className="expense-item__date">
      <MdCalendarToday className="expense-item__date-icon" />
      27th April 2020
    </div>
  );
}

export default ExpenseItemDate;
