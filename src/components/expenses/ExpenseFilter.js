import React from "react";
import "../../style/expenses/ExpenseFilter.css";

function ExpenseFilter(props) {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__dropdown ">
        <p>Select a year:</p>
        <select onChange={filterChangeHandler} defaultValue={props.defaultValue}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFilter;
