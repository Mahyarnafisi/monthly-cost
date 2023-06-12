import React from "react";
import { useState } from "react";
import "../../style/newexpense/NewExpenseForm.css";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function NewExpenseForm(props) {
  // store changes in States
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // event handlers
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewData = {
      id: (Math.random() * 100 + Math.random() * 100 + Math.random() * 6.631).toFixed(3),
      title: enteredTitle,
      amount: enteredNumber,
      date: enteredDate,
    };
    setEnteredTitle("");
    setEnteredNumber("");
    setEnteredDate("");
    props.onSaveExpenseData(enteredNewData);

    // console.log(enteredNewData);
  };

  //
  return (
    <form className="newexpenseform" onSubmit={submitHandler}>
      <div className="input--title hover-bright">
        <label htmlFor="inputTitle">
          Title <BsChevronRight className="label-icon" />
        </label>
        <input type="text" name="inputTitle" required placeholder="Title" value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className="input--amount hover-bright">
        <label htmlFor="inputAmount">
          Amount <BsChevronRight className="label-icon" />
        </label>
        <input type="number" name="inputAmount" required placeholder="Amount" value={enteredNumber} onChange={numberChangeHandler} />
      </div>

      <div className="input--date hover-bright">
        <label htmlFor="inputDate">
          Date <BsChevronRight className="label-icon" />
        </label>
        <input type="date" name="inputDate" min="2019-01-01" max="2020-01-01" value={enteredDate} onChange={dateChangeHandler} />
      </div>

      <button className="expenseform__submit hover-bright" type="submit">
        <BsPlusLg className="submit-icon" />
      </button>
    </form>
  );
}

export default NewExpenseForm;
