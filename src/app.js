import React, { useState } from "react";
import "./app.css";
import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Monthly Rent",
    amount: 230,
    date: new Date(2021, 2, 3),
  },
  {
    id: "e2",
    title: "Electricity",
    amount: 240,
    date: new Date(2023, 2, 6),
  },
  {
    id: "e3",
    title: "Gas",
    amount: 234,
    date: new Date(2322, 3, 3),
  },
  {
    id: "e4",
    title: "Grocery ",
    amount: 453,
    date: new Date(2022, 4, 4),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const UpdatedExpense = [expense, ...expenses];
    setExpenses(UpdatedExpense);
  };

  return (
    <div>
      <h2>Apartments expense sheet (Muhammad Hassan)</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
};
export default App;
