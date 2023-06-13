import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../../style/expenses/Expenses.css";

function Expenses(props) {
  const filterExpenses = props.item.filter((expense) => {
    return expense.date.slice(0, 4) === props.filterYear;
  });

  return (
    <div className="expenses">
      {filterExpenses.length === 0 && <p className="expenses__not-found">There is no record found!</p>}
      {filterExpenses.length > 0 && filterExpenses.map((item) => <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />)}
    </div>
  );
}

export default Expenses;
