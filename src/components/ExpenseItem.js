import React from "react";
import "../style/ExpenseItem.css";
import { MdCalendarToday } from "react-icons/md";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <MdCalendarToday className="expense-item__date-icon" />
        27th April 2020
      </div>
      <div className="expense-item__description">Car insurance</div>
      <div className="expense-item__price">$239</div>
    </div>
  );
}
export default ExpenseItem;
