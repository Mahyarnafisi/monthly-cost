import React from "react";
import "../../style/newexpense/NewExpenseForm.css";
import { BsPlusLg } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function NewExpenseForm() {
  return (
    <form className="newexpenseform" method="POST">
      <div className="input--title hover-bright">
        <label htmlFor="inputTitle">
          Title <BsChevronRight className="label-icon" />
        </label>
        <input type="text" name="inputTitle" required placeholder="Title" />
      </div>

      <div className="input--amount hover-bright">
        <label htmlFor="inputAmount">
          Amount <BsChevronRight className="label-icon" />
        </label>
        <input type="number" name="inputAmount" required placeholder="Amount" />
      </div>

      <div className="input--date hover-bright">
        <label htmlFor="inputDate">
          Date <BsChevronRight className="label-icon" />
        </label>
        <input type="date" name="inputDate" required min="2019-01-01" max="2020-01-01" />
      </div>

      <button className="expenseform__submit hover-bright">
        <BsPlusLg className="submit-icon" />
      </button>
    </form>
  );
}

export default NewExpenseForm;
