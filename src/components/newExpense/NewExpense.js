import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import NewExpenseForm from "./NewExpenseForm";
import "../../style/newexpense/NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const createNewExpenseData = (data) => {
    const expenseData = {
      ...data,
    };
    props.onAddExpenses(expenseData);
    setIsEditing(false);
  };
  // function to close and open the add item
  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  // function for showing massage on hover effect
  const mouseEnterHandler = () => {
    setIsHover(true);
  };

  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <div className="newexpense">
      {!isEditing && (
        <button className="newexpense__btn-add" onClick={startEditingHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <BsPlusLg className="btn-add" />
          {isHover && <p className="btn-massage">Add your expense item</p>}
        </button>
      )}
      {isEditing && <NewExpenseForm onSaveExpenseData={createNewExpenseData} closeEditing={startEditingHandler} />}
    </div>
  );
}

export default NewExpense;
