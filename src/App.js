import React from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  // Dummy data list
  const expense = [
    { id: 1, title: "car insurance", date: "24th April 2021", amount: 239 },
    { id: 2, title: "Books", date: "27th September 2021", amount: 199 },
    { id: 3, title: "Saving", date: "30th November 2021", amount: 829 },
    { id: 4, title: "Groceries", date: "29th March 2021", amount: 389 },
    { id: 5, title: "Jeans and shoes", date: "29th November 2019", amount: 299 },
  ];
  //
  const addExpensesHandler = (data) => {
    const expenses = {
      ...data,
    };
    console.log("from app js");
    console.log(expenses);
  };
  return (
    <div className="App">
      <NewExpense onAddExpenses={addExpensesHandler} />
      <Expenses item={expense} />
    </div>
  );
}

export default App;
