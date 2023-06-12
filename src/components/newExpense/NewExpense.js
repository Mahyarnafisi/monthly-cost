import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "../../style/newexpense/NewExpense.css";

function NewExpense(props) {
  const createNewExpenseData = (data) => {
    const expenseData = {
      ...data,
    };
    props.onAddExpenses(expenseData);
  };
  return (
    <div className="newexpense">
      <NewExpenseForm onSaveExpenseData={createNewExpenseData} />
    </div>
  );
}

export default NewExpense;
