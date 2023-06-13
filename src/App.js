import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import ExpenseFilter from "./components/expenses/ExpenseFilter";

// Dummy data list
const initiateExpense = [
  { id: 1, title: "car insurance", date: "2021-02-19", amount: 239 },
  { id: 2, title: "Books", date: "2020-06-11", amount: 199 },
  { id: 3, title: "Saving", date: "2021-02-12", amount: 829 },
  { id: 4, title: "Groceries", date: "2019-06-25", amount: 389 },
  { id: 5, title: "Jeans and shoes", date: "2019-02-17", amount: 299 },
  { id: 6, title: "Car wash", date: "2020-07-11", amount: 199 },
];
function App() {
  const [expenses, setExpenses] = useState(initiateExpense);
  // State section
  const [filterYear, setFilterYear] = useState("2022");

  //climb up data from form expenses
  const addExpensesHandler = (data) => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
    console.log(expenses);
  };

  // climb up data from filter selected and save it in state
  const selectedYearFilter = (data) => setFilterYear(data);

  return (
    <div className="App">
      <ExpenseFilter defaultValue={filterYear} onFilterChange={selectedYearFilter} />
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
