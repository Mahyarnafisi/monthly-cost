import React from "react";
import "../../style/expenses/ExpenseItemDate.css";
import { MdCalendarToday } from "react-icons/md";

function ExpenseItemDate(props) {
  return (
    <div className="expense-item__date">
      <MdCalendarToday className="expense-item__date-icon" />
      {props.date}
    </div>
  );
}

export default ExpenseItemDate;
